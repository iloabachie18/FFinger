import MainLayout from "@/components/layouts/MainLayout";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryHighlight from "@/components/home/CategoryHighlight";
import FeaturedDeals from "@/components/home/FeaturedDeals";
import TrendingBrands from "@/components/home/TrendingBrands";
import RecommendedProducts from "@/components/home/RecommendedProducts";

export default function Home() {
  return (
    <MainLayout>
      <HeroBanner />
      <CategoryHighlight />
      <FeaturedDeals />
      <TrendingBrands />
      <RecommendedProducts />
    </MainLayout>
  );
}
