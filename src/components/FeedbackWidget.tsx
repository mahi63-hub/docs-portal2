import React, { useState } from 'react';

export default function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      setSubmitted(true);
      setText('');
      // In a real app, send to API here
    }
  };

  return (
    <div className="mt-12 p-4 border rounded shadow-sm">
      <h3 className="font-bold mb-2">Was this page helpful? Let us know!</h3>
      {submitted ? (
        <div data-testid="feedback-success-message" className="text-green-600 p-2 bg-green-50 rounded">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <textarea
            data-testid="feedback-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded"
            placeholder="Your feedback..."
            rows={3}
            required
          />
          <button
            type="submit"
            data-testid="feedback-submit"
            className="bg-blue-500 text-white px-4 py-2 rounded self-start hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
