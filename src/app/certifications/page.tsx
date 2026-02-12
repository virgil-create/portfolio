import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Posts } from "@/components/certifications/Posts";
import { baseURL, certifications, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: certifications.title,
    description: certifications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certifications.title)}`,
    path: certifications.path,
  });
}

export default function Certifications() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={certifications.title}
        description={certifications.description}
        path={certifications.path}
        image={`/api/og/generate?title=${encodeURIComponent(certifications.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/certifications`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {certifications.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
