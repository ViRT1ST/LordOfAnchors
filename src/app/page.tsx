import { Suspense } from 'react';

import PageWrapper from '@/components/common/page-wrapper';
import MainContent from '@/components/common/main-content';
import SearchForm from '@/components/forms/search-form';
import LinkList from '@/components/lists/link-list';

type HomePageProps = {
  searchParams: {
    search?: string | undefined
    show?: string | undefined
  }
};

export default function HomePage({ searchParams }: HomePageProps) {  
  const searchQuery = searchParams.search || '';
  const show = searchParams.show || '';

  return (
    <PageWrapper >
      <MainContent>
        <SearchForm />
        
        <Suspense fallback={<p>Loading...</p>}>
          <LinkList searchQuery={searchQuery} show={show} />
        </Suspense>

      </MainContent>
    </PageWrapper>
  );
}

