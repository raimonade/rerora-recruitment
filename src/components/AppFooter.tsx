import AppearIn from './AppearIn';
import Container from './Container';

const AppFooter = () => {
  return (
    <footer class="w-full border-t-2 border-stone-900 mt-auto">
      <Container>
        <div class="pt-8 md:flex justify-between">
          <div class="md:w-3/6">
            <AppearIn delay={0.11}>
              <p class=" lg:text-3xl text-2xl">
                Looking to start a new partnership? Send us{' '}
                <a class="underline" href="mailto:info@rerora-recruitment.com">
                  an email
                </a>{' '}
                and we will respond as soon as possible.
              </p>
            </AppearIn>
          </div>

          <div class=" md:pt-0 pt-4">
            <AppearIn delay={0.11}>
              <div class="flex flex-col">
                <h3 class="text-xl">Contact</h3>
                <a class="underline" href="mailto:info@rerora-recruitment.com">
                  info@rerora-recruitment.com
                </a>
                <a class="underline" href="tel:+371 20 390 100">
                  +37120390100
                </a>
                <p>Riga, Latvia</p>
              </div>
            </AppearIn>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;
