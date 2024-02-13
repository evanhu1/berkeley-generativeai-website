import Image from 'next/image';

function Footer() {
  return (
    <div className="justify-center w-full py-6 mt-8 bg-zinc-900 absolute bottom-0 h-24">
      <div className="flex flex-row justify-center">
        <a href="https://www.ocf.berkeley.edu">
          <Image 
            src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
            alt="Hosted by the OCF" 
            width={200} // Specify the width of the image
            height={60} // Specify the height of the image
            className="border-0"
            unoptimized={true} // Use this prop if your image provider does not support Next.js image optimization
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
