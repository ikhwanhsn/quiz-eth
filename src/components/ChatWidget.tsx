"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "@/styles/globals.css";

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://velobid.app.n8n.cloud/webhook/b23d725c-f978-4fdb-8c70-061d27a33aa8/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: [
        "Hi there! 👋",
        "I’m QuizETH Mentor, your personal guide to mastering Web3 and crypto.",
      ],
      i18n: {
        en: {
          title: "Hi there! 👋",
          subtitle: "Start a chat. We're here to help you 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
          closeButtonTooltip: "Close",
        },
      },
    });
  }, []);

  return <div></div>;
};
