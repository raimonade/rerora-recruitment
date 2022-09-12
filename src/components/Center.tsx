import Button from './Button';
import Container from './Container';
import AppearIn from './AppearIn';

const Center = () => {
  return (
    <div class="my-auto w-full">
      <Container className="min-h-64 pb-28 relative">
        <h1 class="flex flex-col pb-8 md:mt-auto self-center font-bold lg:text-9xl md:text-8xl text-5xl sm:text-8xl items-start">
          {/* <AppearIn><span >Recruitment</span> </AppearIn> */}
          <AppearIn delay={0.03}>Recruitment </AppearIn>
          <AppearIn delay={0.03}>made easy </AppearIn>
        </h1>
        <div class="mb-10">
          <AppearIn delay={0.06}>
            <p class="text-l sm:text-xl max-w-l lg:text-2xl sm:max-w-xl lg:max-w-2xl text-neutral-400">
              Hands-on approach to recruitment tailored to the online entertainment and gaming
              industry
            </p>
          </AppearIn>
        </div>
        <AppearIn delay={0.09} y={60}>
          <Button />
        </AppearIn>
      </Container>
    </div>
  );
};

export default Center;
