import React, { useState } from "react";

export default function ChatComponent() {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const prompt = `What are some best practices for living a sustainable life?`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const responseText = data.choices[0].text;

      setResponse(responseText);
    } catch (error) {
      console.error("Error:", error);
      setResponse(`Failed to get a response. Error: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        <button type="submit">Get Sustainable Living Tips</button>
      </form>
      {response && (
        <div
          style={{
            maxWidth: "600px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <strong>Hello there!</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
