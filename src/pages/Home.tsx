import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import Center from '@/components/Center';
import CompanyList from '@/components/CompanyList';

const Home = () => (
  <div class="relative w-full h-full flex flex-col justify-center items-center font-Inter tracking-tighter px-4 sm:px-8 lg:px-16 xl:px-20 w-screen min-h-screen relative text-stone-900 py-8 ">
    <AppHeader />
    <Center />
    <div class="mt-auto w-full">
      <CompanyList />
      <AppFooter />
    </div>
  </div>
);

export default Home;
