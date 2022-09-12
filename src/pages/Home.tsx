import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import Center from '@/components/Center';

const Home = () => (
  <div class="bg-black w-screen text-white overflow-x-hidden h-full flex flex-col justify-center items-center font-Inter tracking-tighter subpixel-antialiased min-h-screen relative  py-8 ">
    <AppHeader />
    <Center />
    <div class="mt-auto w-full">
      <AppFooter />
    </div>
  </div>
);

export default Home;
