import { useLayoutEffect, useRef, useState } from "react";

export const Blackquote = ({ message, quote, author }) => {
  const quoteRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = quoteRef.current.getBoundingClientRect();
    setBoxSize({width, height});
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={quoteRef} className="mb-1">{`${message}: ${quote}`}</p>
        <footer className="blackquote-footer">{`${author.name}`}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
