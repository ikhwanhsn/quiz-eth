// SPDX-License-Identifier: MIT
pragma solidity 0.8.29;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract RewardToken is ERC20, Ownable, ReentrancyGuard {
    uint256 public constant INITIAL_SUPPLY = 1_000_000_000 * 10 ** 18;

    struct User {
        uint256 highestScore;
        uint256 totalQuizPlayed;
        uint256 reward;
    }

    mapping(address => User) public userDetails;

    struct LeaderboardEntry {
        address player;
        uint256 score;
    }

    LeaderboardEntry[10] public leaderboard;

    event RewardClaimed(address indexed player, uint256 amount);
    event ScoreSubmitted(address indexed player, uint256 score, uint256 reward);

    constructor() ERC20("QuizETH Token", "QET") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function claimReward() external nonReentrant {
        User storage _user = userDetails[msg.sender];
        uint256 rewardAmount = _user.reward;

        require(rewardAmount > 0, "You don't have any rewards to claim.");
        require(balanceOf(owner()) >= rewardAmount, "Not enough reward tokens.");

        _user.reward = 0;
        _transfer(owner(), msg.sender, rewardAmount);

        emit RewardClaimed(msg.sender, rewardAmount);
    }

    function submitScore(uint256 _score) external {
        require(_score <= 10, "Max score is 10");

        User storage _user = userDetails[msg.sender];
        _user.totalQuizPlayed += 1;

        if (_score > _user.highestScore) {
            _user.highestScore = _score;
        }

        uint256 reward = (_score * 10 + 10) * 10 ** decimals();
        _user.reward += reward;

        _updateLeaderboard(msg.sender, _score);

        emit ScoreSubmitted(msg.sender, _score, reward);
    }

    function _updateLeaderboard(address _player, uint256 _score) internal {
        // If score isn't higher than lowest in leaderboard, skip
        if (_score <= leaderboard[4].score) return;

        // Insert at correct position
        for (uint i = 0; i < leaderboard.length; i++) {
            if (_score > leaderboard[i].score) {
                // Shift down
                for (uint j = leaderboard.length - 1; j > i; j--) {
                    leaderboard[j] = leaderboard[j - 1];
                }

                leaderboard[i] = LeaderboardEntry({
                    player: _player,
                    score: _score
                });

                break;
            }
        }
    }

    // View function to get the leaderboard
    function getLeaderboard() external view returns (LeaderboardEntry[10] memory) {
        return leaderboard;
    }
}
