'use client';

import Link from 'next/link';

import { type DbPinnedQuery } from '@/types';
import { useStore } from '@/store/useStore';
import { cnJoin } from '@/utils/classes';

type QueryItemProps = {
  query: DbPinnedQuery;
};

export default function QueryItem({ query }: QueryItemProps) {
  const setCurrentModalWindow = useStore((state) => state.setCurrentModalWindow);
  const setCurrentModalWindowPos = useStore((state) => state.setCurrentModalWindowPos);
  const setCurrentQueryData = useStore((state) => state.setCurrentQueryData);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    const reactCssPosStyles = {
      top: `${rect.top + rect.height / 2 + 8}px`,
      left: `${rect.left + rect.width / 2 - 8}px`,
    };

    setCurrentModalWindowPos(reactCssPosStyles);
    setCurrentQueryData(query);
    setCurrentModalWindow('query-context-menu');
  };

  return (
    <div onContextMenu={handleRightClick}>
      <Link className={twLink} href={`/?q=${query.query}`}>
        {query.label}
      </Link>
    </div>
  );
}

const twLink = cnJoin(
  'h-8 inline-flex rounded-md border border-black/20  px-5 py-4',
  'justify-center items-center',
  ' text-base font-medium text-black/70',
  'font-rubik transition-all',

  // bg-white/40
  // bg-based on flowers backround
  'bg-[#f4f4f4]',
  'hover:text-black/90'
);
