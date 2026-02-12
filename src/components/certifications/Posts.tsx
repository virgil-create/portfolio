import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: PostsProps) {
  let allCertifications = getPosts(["src", "app", "certifications", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allCertifications = allCertifications.filter((post) => !exclude.includes(post.slug));
  }

  const sortedCertifications = allCertifications.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedCertifications = range
    ? sortedCertifications.slice(range[0] - 1, range.length === 2 ? range[1] : sortedCertifications.length)
    : sortedCertifications;

  return (
    <>
      {displayedCertifications.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayedCertifications.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} direction={direction} />
          ))}
        </Grid>
      )}
    </>
  );
}
