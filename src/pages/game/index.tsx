import { useCallback, useEffect, useRef } from "react";

const Game: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendMessageToIframe = useCallback(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const iframeWindow = iframeRef.current?.contentWindow;

    if (accessToken && refreshToken && iframeWindow) {
      iframeWindow.postMessage(
        { accessToken, refreshToken },
        "http://localhost:7456"
      );
    }
  }, []);

  const handleMessageFromIframe = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== "http://localhost:7456") return;

      const { data: message } = event;

      if (message === "connected") {
        sendMessageToIframe();
      }
    },
    [sendMessageToIframe]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessageFromIframe);

    return () => {
      window.removeEventListener("message", handleMessageFromIframe);
    };
  }, [handleMessageFromIframe]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <iframe
        ref={iframeRef}
        src="http://localhost:7456"
        width="1920"
        height="800"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
};

export default Game;
