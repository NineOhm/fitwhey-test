import Header from '@/components/Header'
import ImageGallery from '@/components/ImageGallery'
import FlashSale from '@/components/FlashSale'
import ProductHeadingInfo from '@/components/ProductHeadingInfo'
import MidDetail from '@/components/MidDetail'
import BundleSet from '@/components/BundleSet'
import ProductReviews from '@/components/ProductReviews'
import Footer from '@/components/Footer'

//example fetch data from api
import { product } from '@/data/product'

export default function Home() {

  return (
    <div className="pb-20">
      <Header />
      <ImageGallery product={product} />
      <FlashSale />
      <ProductHeadingInfo />
      <MidDetail />
      <BundleSet />
      <ProductReviews />
      <Footer />
    </div>
  )
}