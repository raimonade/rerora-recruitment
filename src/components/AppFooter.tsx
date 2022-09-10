const AppFooter = () => {
  return (
    <footer class="pt-8 md:flex justify-between w-100 border-t-2 border-stone-900 mt-auto">
      <p class="md:w-3/6 text-3xl">
        Looking to start a new partnership? Send us{' '}
        <a class="underline" href="mailto:info@rerora-recruitment.com">
          an email
        </a>{' '}
        and we will respond as soon as possible.
      </p>
      <div class="flex flex-col md:pt-0 pt-4">
        <h3 class="text-xl">Contact</h3>
        <a class="underline" href="mailto:info@rerora-recruitment.com">
          info@rerora-recruitment.com
        </a>
        <a class="underline" href="tel:+371 20 390 100">
        +37120390100
        </a>
        <p>Riga, Latvia</p>
      </div>
    </footer>
  );
};

export default AppFooter;
