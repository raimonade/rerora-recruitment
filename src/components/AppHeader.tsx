import Logo from '@/assets/svg/Logo';
import AppearIn from './AppearIn';
import Container from './Container';

const AppHeader = () => {
  return (
    <header class="w-full border-b-2 pb-8 border-stone-900 mb-40 font-medium text-xl sm:text-2xl text-left self-start">
      <Container>
        <AppearIn>
          <div class="md:w-[162px] md:h-[29px] w-[124px] h-[23px]">
            <Logo />
          </div>
        </AppearIn>
      </Container>
    </header>
  );
};

export default AppHeader;
