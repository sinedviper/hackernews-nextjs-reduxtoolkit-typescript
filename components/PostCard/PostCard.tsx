/* eslint-disable react/no-children-prop */
import React from "react";
import cn from "classnames";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { PostCardProps } from "./PostCard.props";

import styles from "./PostCard.module.css";
import { Error404 } from "../../pages/404";

export const PostCard = ({
  card,
  className,
  ...props
}: PostCardProps): JSX.Element => {
  if (!card) {
    return <Error404 />;
  }

  const { title, by, time, score, kids, text, url } = card;

  return (
    <div className={cn(className, styles.card)} {...props}>
      <div className={styles.wrapperTitle}>
        <h2 className={styles.title}>{title}</h2>
        {url && (
          <a href={url} target='blank' className={styles.site}>
            Link
          </a>
        )}
      </div>
      <div className={styles.text}>
        {text && (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkMath]}
            children={text}
            className={styles.textMark}
          />
        )}
      </div>
      <div className={styles.foot}>
        <span className={styles.by}>
          by <Link href={`/users/${by}`}>{by}</Link>
        </span>
        <span className={styles.time}>
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        <span className={styles.point}>score {score}</span>
        {kids && (
          <span className={styles.comments}>comments {kids.length}</span>
        )}
      </div>
    </div>
  );
};
