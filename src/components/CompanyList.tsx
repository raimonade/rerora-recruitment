import EhrLogo from '@/assets/svg/EhrLogo';
import HelloMondayLogo from '@/assets/svg/HelloMondayLogo';
import LegoLogo from '@/assets/svg/LegoLogo';
// import LimboLogo from '@/assets/svg/LimboLogo';
import MicrosoftLogo from '@/assets/svg/MicrosoftLogo';
import OvertoneLogo from '@/assets/svg/OvertoneLogo';

const CompanyList = () => {
  return (
    <div>
      <p class="text-xl">Our talent has worked with</p>
      <div class="gap-4 flex flex-wrap my-4">
        <OvertoneLogo />
        <LegoLogo />
        <MicrosoftLogo />
        <EhrLogo />
        <HelloMondayLogo />
        {/* <LimboLogo /> */}
      </div>
    </div>
  );
};

export default CompanyList;
