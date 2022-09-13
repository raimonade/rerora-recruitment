import Button from './Button';
import Container from './Container';
import AppearIn from './AppearIn';

//<h1 class=" mb-12"
//<p class="text-lg" style="color: hsl(218, 81%, 95%)">
const Center = () => {
  return (
    <div class="my-auto w-full">
      <Container className="min-h-64 md:pb-28 pb-20 relative">
        <h1 class="flex flex-col md:pb-8 pb-4 md:mt-auto self-center font-extrabold items-start text-7xl md:text-9xl xl:text-10xl bold tracking-tight">
          <AppearIn delay={0.03}>Recruitment </AppearIn>
          <AppearIn delay={0.03}>made easy </AppearIn>
        </h1>
        <div class="md:mb-8 mb-5">
          <AppearIn delay={0.06}>
            <p class="max-w-l sm:max-w-xl lg:max-w-2xl text-lg md:text-xl xl:text-2xl font-normal text-neutral-300">
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
