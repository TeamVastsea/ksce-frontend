import { ImageModal } from "@/components/image-modal"

export function ImageGallerySection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">活动图片</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-center">
          <ImageModal
            src="/placeholder.jpg"
            alt="活动图片1"
            width={400}
            height={300}
          />
          
          <ImageModal
            src="/placeholder.jpg"
            alt="活动图片2"
            width={400}
            height={300}
          />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            更多精彩内容正在更新中，敬请期待！
          </p>
        </div>
      </div>
    </section>
  )
}