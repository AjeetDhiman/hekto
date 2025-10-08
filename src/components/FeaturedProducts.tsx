import Container from "@/components/Container";
import FancyHeading from "@/components/FancyHeading";
import FeaturedProductsSlider from "@/components/FeaturedProductsSlider";
import Section from "@/components/Section";

type Props = {};

function FeaturedProducts({}: Props) {
  return (
    <Section className="pt-32 pb-[72px]">
      <Container>
        <FancyHeading>Featured Products</FancyHeading>
        <FeaturedProductsSlider />
      </Container>
    </Section>
  );
}

export default FeaturedProducts;
