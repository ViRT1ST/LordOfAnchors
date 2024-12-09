import { cnJoin } from '@/utils/formatting';

type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className={twPageWrapper}>
      {children}
    </div>
  );
}

const twPageWrapper = cnJoin(
  'flex flex-col w-full h-full min-h-screen',
  'font-geistsans', 
  // 'bg-stone-200',
  // 'bg-[#afb4b6]',
  // 'bg-[#b6afaf]',
  // 'bg-[#5daedd]'
  // 'bg-[#E7E5E4]',
  'bg-[#E4E4E4]',
  `bg-[url('https://res.cloudinary.com/dbgj7kvye/image/upload/v1731966605/testings/vecteezy_floral-wallpaper-floral-pattern-wallpaper-black-and-white_7892502--_xgjw4v.png')]`,
);
