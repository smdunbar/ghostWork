"use client"

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-[#19c093] font-bold text-xl mb-2">
        Write-Up on Design Logic and Choices
      </h1>
      <p className="text-xs text-[#828282] mb-8">
        by Avery Espiritu &apos;27 and Simone Dunbar &apos;26
      </p>

      {/* Placeholder Image */}
      <div className="bg-[#f2f2f2] w-full h-64 rounded-lg mb-8" />

      {/* Article Content */}
      <div className="prose prose-sm max-w-none">
        <p className="text-sm text-[#828282] leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum est 
          et elit ullamcorper accumsan. Curabitur laoreet maximus est. Cras pretium felis 
          orci, sed rutrum mauris ultricies quis pretium. Maecenas in pellentesque libero. 
          Mauris tristique ac mi blandit.
        </p>
        <p className="text-sm text-[#828282] leading-relaxed mb-4">
          Phasellus sed ullamcorper leo. Nam sed orci nisi laoreet. Duis pret pellentesque elit. 
          Nulla vitae laoreet enim at orci aliquam sollicitudin sed ac elit. vestibulum id massa 
          diledit, velit porta in. Curabitur feugiat, Nunc sed leo ex.
        </p>
        <p className="text-sm text-[#828282] leading-relaxed mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
          sit aspernatur aut odit aut fugit.
        </p>
        <p className="text-sm text-[#828282] leading-relaxed">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising 
          pain was born and I will give you a complete account of the system, and expound the actual 
          teachings of the great explorer of the truth, the master-builder of human happiness.
        </p>
      </div>
    </div>
  )
}
