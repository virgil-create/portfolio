import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/projets/Posts";
import { baseURL, projets, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: projets.title,
    description: projets.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projets.title)}`,
    path: projets.path,
  });
}

export default function Projets() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={projets.title}
        description={projets.description}
        path={projets.path}
        image={`/api/og/generate?title=${encodeURIComponent(projets.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/projets`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {projets.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 4]} columns="4" thumbnail direction="column" />
        <Posts range={[5]} columns="4" />
      </Column>
    </Column>
  );
}
