"use client";

import { useCode } from "@/app/context/CodeContext";
import CardHeader from "@/components/card-header";
import classNames from "classnames";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function ExampleWrapper({
  children,
  code,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  code?: string;
  title: string;
  subtitle: string;
}) {
  const { showCode } = useCode();

  return (
    <div className="flex flex-col w-full h-full items-center justify-center relative">
      <CardHeader title={title} subtitle={subtitle} />
      <div
        className={classNames(
          "rounded w-full h-[50vmin] flex items-center justify-center",
          { "pl-4": showCode, "p-8": !showCode }
        )}
      >
        {showCode && code ? (
          <div className="block w-full h-full overflow-y-auto">
            <SyntaxHighlighter language="tsx" style={irBlack}>
              {code.trim()}
            </SyntaxHighlighter>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
