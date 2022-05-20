import React from 'react';
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <div className="container">
      <div className='navigation'>
        <svg className='logo' width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.95 3.89999C28.4671 3.89999 28.9634 3.69454 29.3289 3.32892C29.6945 2.96329 29.9 2.46705 29.9 1.95002C29.9 1.433 29.6945 0.936692 29.3289 0.571132C28.9633 0.205572 28.4671 6.10352e-05 27.95 6.10352e-05C27.433 6.10352e-05 26.9367 0.205506 26.5711 0.571132C26.2056 0.936759 26.0001 1.433 26.0001 1.95002C26.0001 2.46705 26.2055 2.96336 26.5711 3.32892C26.9368 3.69448 27.433 3.89999 27.95 3.89999ZM27.95 1.29999C28.2129 1.29999 28.45 1.45842 28.5504 1.7013C28.6511 1.94418 28.5957 2.22362 28.4097 2.40963C28.2237 2.59564 27.9442 2.65106 27.7013 2.55036C27.4585 2.44996 27.3 2.21288 27.3 1.94999C27.3 1.59104 27.5911 1.29999 27.95 1.29999Z" fill="#373737"/>
              <path d="M19.3618 20.0884C19.3618 20.4473 19.0708 20.7384 18.7118 20.7384C18.3529 20.7384 18.0618 20.4473 18.0618 20.0884C18.0618 19.7294 18.3529 19.4384 18.7118 19.4384C19.0708 19.4384 19.3618 19.7294 19.3618 20.0884Z" fill="#373737"/>
              <path d="M1.95002 28.6C2.46712 28.6 2.96335 28.3946 3.32891 28.0289C3.69447 27.6633 3.89999 27.1671 3.89999 26.65C3.89999 26.133 3.69454 25.6367 3.32891 25.2711C2.96329 24.9056 2.46705 24.7001 1.95002 24.7001C1.43299 24.7001 0.936692 24.9055 0.571132 25.2711C0.205572 25.6368 6.10352e-05 26.133 6.10352e-05 26.65C6.10352e-05 27.1671 0.205506 27.6634 0.571132 28.0289C0.936759 28.3945 1.43299 28.6 1.95002 28.6ZM1.95002 26C2.21293 26 2.45 26.1584 2.5504 26.4013C2.65109 26.6442 2.59567 26.9236 2.40967 27.1096C2.22366 27.2957 1.94422 27.3511 1.70134 27.2504C1.45846 27.15 1.30002 26.9129 1.30002 26.65C1.30002 26.291 1.59107 26 1.95002 26Z" fill="#373737"/>
              <path d="M22.1 31.85C22.1 32.3671 22.3054 32.8633 22.671 33.2289C23.0367 33.5944 23.5329 33.8 24.0499 33.8C24.567 33.8 25.0633 33.5945 25.4288 33.2289C25.7944 32.8633 25.9999 32.367 25.9999 31.85C25.9999 31.333 25.7945 30.8367 25.4288 30.4711C25.0632 30.1055 24.567 29.9 24.0499 29.9C23.5329 29.9 23.0366 30.1055 22.671 30.4711C22.3055 30.8367 22.1 31.333 22.1 31.85ZM24.7 31.85C24.7 32.1129 24.5415 32.35 24.2987 32.4504C24.0558 32.5511 23.7763 32.4956 23.5903 32.3096C23.4043 32.1236 23.3489 31.8442 23.4496 31.6013C23.55 31.3584 23.7871 31.2 24.05 31.2C24.2223 31.2 24.3877 31.2685 24.5096 31.3903C24.6315 31.5122 24.7 31.6776 24.7 31.85Z" fill="#373737"/>
              <path d="M32.1702 16.4394C32.1928 14.8629 31.5889 13.3415 30.4914 12.2095C29.394 11.0773 27.8923 10.4264 26.3158 10.3997H20.4748C20.0856 10.3988 19.7049 10.5143 19.3816 10.7311C19.0584 10.9481 18.8074 11.2566 18.6606 11.6173L14.6306 21.4639L10.6005 11.6173C10.3356 10.9691 9.74478 10.5114 9.05102 10.4172C8.35721 10.3226 7.66574 10.6055 7.23682 11.1592C6.80789 11.7128 6.70724 12.4531 6.97218 13.1011L12.8144 27.3825H12.8147C13.012 27.8656 13.3942 28.2495 13.8758 28.45C14.3575 28.6503 14.8993 28.6503 15.381 28.45C15.8627 28.2495 16.2446 27.8656 16.4422 27.3825L18.3602 22.7025C18.4313 22.542 18.4342 22.3598 18.3687 22.197C18.3031 22.0342 18.1745 21.9051 18.0123 21.8386C17.8498 21.7719 17.6676 21.7739 17.5065 21.8438C17.3458 21.9138 17.2198 22.0458 17.1577 22.2101L15.2391 26.8901C15.1349 27.1347 14.8944 27.2937 14.6283 27.2937C14.3622 27.2937 14.1219 27.1347 14.0177 26.8901L8.17872 12.6101C8.10791 12.4473 8.10588 12.2628 8.17291 12.0985C8.23994 11.9343 8.37023 11.8037 8.53448 11.7367C8.699 11.6696 8.88327 11.6717 9.04606 11.7422C9.20914 11.8127 9.33653 11.9459 9.40008 12.1116L14.0293 23.4298C14.1329 23.6703 14.3694 23.8261 14.6311 23.8261C14.8931 23.8261 15.1296 23.6703 15.2332 23.4298L19.8633 12.1116H19.863C19.9634 11.862 20.2057 11.699 20.4747 11.7001H26.3169C27.5487 11.7265 28.7199 12.2404 29.5736 13.1286C30.4276 14.0172 30.8942 15.208 30.8716 16.4398C30.8852 17.5182 30.5283 18.5683 29.8603 19.4151C29.1921 20.2615 28.2536 20.8529 27.2017 21.09C26.9722 21.1405 26.7871 21.3099 26.7168 21.5342C26.6466 21.7585 26.7018 22.0032 26.8616 22.1755L30.6888 26.1855V26.1852C30.9401 26.4492 30.9303 26.8665 30.6668 27.1181C30.4001 27.3604 29.9904 27.3506 29.7353 27.0961L23.892 20.9756C23.7133 20.7835 23.6645 20.5044 23.7675 20.2632C23.8705 20.0221 24.1062 19.8642 24.3685 19.8607H26.3185C27.4958 19.7957 28.5569 19.1301 29.1277 18.0982C29.6984 17.0663 29.6984 15.8133 29.1277 14.7815C28.5569 13.7496 27.4957 13.0839 26.3185 13.0189H21.3529C21.0874 13.0189 20.8486 13.1805 20.7499 13.4272L19.1139 17.5053L19.1136 17.505C18.9889 17.8361 19.1519 18.2061 19.4801 18.3378C19.8083 18.4693 20.1818 18.3143 20.3202 17.9887L21.7926 14.3189H26.3159C27.0271 14.3848 27.658 14.8029 27.9957 15.432C28.3335 16.0614 28.3335 16.8181 27.9957 17.4476C27.658 18.0767 27.0271 18.4949 26.3159 18.5607H24.3659C23.8514 18.5604 23.3573 18.7623 22.9907 19.1233C22.6239 19.4843 22.4141 19.975 22.4063 20.4892C22.3985 21.0037 22.5932 21.5005 22.9487 21.8725L28.7949 27.9924C29.2786 28.4984 29.9953 28.7079 30.6755 28.5423C31.3557 28.3766 31.8957 27.8606 32.0921 27.1885C32.2886 26.5168 32.1118 25.7911 31.6281 25.285L28.5232 22.035C29.6122 21.562 30.5385 20.7797 31.1867 19.7849C31.835 18.7902 32.1771 17.6272 32.1701 16.4398L32.1702 16.4394Z" fill="#373737"/>
              <path d="M36.4 35.75C36.4 36.109 36.1089 36.4 35.75 36.4C35.391 36.4 35.1 36.109 35.1 35.75C35.1 35.3911 35.391 35.1 35.75 35.1C36.1089 35.1 36.4 35.3911 36.4 35.75Z" fill="#373737"/>
              <path d="M33.8 35.75C33.8 36.109 33.5089 36.4 33.15 36.4C32.7911 36.4 32.5 36.109 32.5 35.75C32.5 35.3911 32.7911 35.1 33.15 35.1C33.5089 35.1 33.8 35.3911 33.8 35.75Z" fill="#373737"/>
              <path d="M31.2 35.75C31.2 36.109 30.909 36.4 30.55 36.4C30.1911 36.4 29.9 36.109 29.9 35.75C29.9 35.3911 30.1911 35.1 30.55 35.1C30.909 35.1 31.2 35.3911 31.2 35.75Z" fill="#373737"/>
              <path d="M9.09999 3.25001C9.09999 3.60895 8.80894 3.90001 8.44999 3.90001C8.09104 3.90001 7.79999 3.60895 7.79999 3.25001C7.79999 2.89106 8.09104 2.60001 8.44999 2.60001C8.80894 2.60001 9.09999 2.89106 9.09999 3.25001Z" fill="#373737"/>
              <path d="M6.50001 3.25001C6.50001 3.60895 6.20896 3.90001 5.85001 3.90001C5.49106 3.90001 5.20001 3.60895 5.20001 3.25001C5.20001 2.89106 5.49106 2.60001 5.85001 2.60001C6.20896 2.60001 6.50001 2.89106 6.50001 3.25001Z" fill="#373737"/>
              <path d="M3.89998 3.25001C3.89998 3.60895 3.60892 3.90001 3.24998 3.90001C2.89103 3.90001 2.59998 3.60895 2.59998 3.25001C2.59998 2.89106 2.89103 2.60001 3.24998 2.60001C3.60892 2.60001 3.89998 2.89106 3.89998 3.25001Z" fill="#373737"/>
              <path d="M0.65 6.5C0.822365 6.5 0.98777 6.43152 1.10964 6.30964C1.23152 6.18777 1.3 6.02237 1.3 5.85V1.3H5.85C6.20895 1.3 6.5 1.00895 6.5 0.65C6.5 0.291051 6.20895 0 5.85 0H0.65C0.291051 0 0 0.291051 0 0.65V5.85C0 6.02237 0.0684825 6.18777 0.190357 6.30964C0.312232 6.43152 0.477635 6.5 0.65 6.5Z" fill="#373737"/>
              <path d="M0.65 39H5.85C6.20895 39 6.5 38.7089 6.5 38.35C6.5 37.9911 6.20895 37.7 5.85 37.7H1.3V33.15C1.3 32.7911 1.00895 32.5 0.65 32.5C0.291051 32.5 0 32.7911 0 33.15V38.35C0 38.5224 0.0684825 38.6878 0.190357 38.8096C0.312232 38.9315 0.477635 39 0.65 39Z" fill="#373737"/>
              <path d="M33.15 39H38.35C38.5224 39 38.6878 38.9315 38.8096 38.8096C38.9315 38.6878 39 38.5224 39 38.35V33.15C39 32.7911 38.7089 32.5 38.35 32.5C37.9911 32.5 37.7 32.7911 37.7 33.15V37.7H33.15C32.7911 37.7 32.5 37.9911 32.5 38.35C32.5 38.7089 32.7911 39 33.15 39Z" fill="#373737"/>
              <path d="M39 0.65C39 0.477635 38.9315 0.31223 38.8096 0.190357C38.6878 0.068484 38.5224 0 38.35 0H33.15C32.7911 0 32.5 0.291051 32.5 0.65C32.5 1.00895 32.7911 1.3 33.15 1.3H37.7V5.85C37.7 6.20895 37.9911 6.5 38.35 6.5C38.7089 6.5 39 6.20895 39 5.85V0.65Z" fill="#373737"/>
              <path d="M12.35 36.4C12.5224 36.4 12.6878 36.3315 12.8097 36.2096C12.9315 36.0878 13 35.9224 13 35.75V35.1H13.65C14.009 35.1 14.3 34.8089 14.3 34.45C14.3 34.0911 14.009 33.8 13.65 33.8H13V33.15C13 32.7911 12.709 32.5 12.35 32.5C11.9911 32.5 11.7 32.7911 11.7 33.15V33.8H11.05C10.6911 33.8 10.4 34.0911 10.4 34.45C10.4 34.8089 10.6911 35.1 11.05 35.1H11.7V35.75C11.7 35.9224 11.7685 36.0878 11.8904 36.2096C12.0123 36.3315 12.1777 36.4 12.35 36.4Z" fill="#373737"/>
              <path d="M38.35 11.7H37.7V11.05C37.7 10.691 37.4089 10.4 37.05 10.4C36.691 10.4 36.4 10.691 36.4 11.05V11.7H35.75C35.391 11.7 35.1 11.991 35.1 12.35C35.1 12.7089 35.391 13 35.75 13H36.4V13.65C36.4 14.0089 36.691 14.3 37.05 14.3C37.4089 14.3 37.7 14.0089 37.7 13.65V13H38.35C38.7089 13 39 12.7089 39 12.35C39 11.991 38.7089 11.7 38.35 11.7Z" fill="#373737"/>
              <path d="M18.95 4C18.5911 4 18.3 4.29105 18.3 4.65V5.3H17.65C17.2911 5.3 17 5.59105 17 5.95C17 6.30895 17.2911 6.6 17.65 6.6H18.3V7.25C18.3 7.60895 18.5911 7.9 18.95 7.9C19.3089 7.9 19.6 7.60895 19.6 7.25V6.6H20.25C20.6089 6.6 20.9 6.30895 20.9 5.95C20.9 5.59105 20.6089 5.3 20.25 5.3H19.6V4.65C19.6 4.47763 19.5315 4.31223 19.4096 4.19036C19.2878 4.06848 19.1224 4 18.95 4Z" fill="#373737"/>
        </svg>
      <div className='hamburger'>
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 12.75H39.75M8.25 36.75H39.75H8.25ZM8.25 24.75H39.75H8.25Z" stroke="#373737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
       </div>
      </div>
      <div className='homeheading'>
        <h1 className='heading'>play. live. connect. </h1>
      </div>
      <div className='greyarea'>
          <h1 className='greyheading'>Our Games</h1>
          <img className='pewpew' src='https://s3-alpha-sig.figma.com/img/0064/1e59/08175aee22829b04710db22554cdee16?Expires=1653868800&Signature=h1H2MaFQLS~EmlKnIT76WjLPo5b7tMU8c9hhIOgo5Hnt-SPCNNrxVfDpsRrcNGuO1G0yhtjnBEeU4eROJGuoAfOQGiqO6ucZY-xrUeIulatLcOkg8vv3qeMRJbT2ety28nbfOTG9kQ1QaWo-EcNohXfCU1A65sUYLy8ChSJZZdZqmgGnlkzIy51jAMpOAEDonpsfjA4K-gVARIfyfCN9Txdp7xdev0QjnMXa1X84WwJUCKeAwpNibBF9qO~rIl2t-dbmmRjfOKyj9UwOMpXfvJt46U9xi5uiupZNN6dEO9z5S01VNaLrPiEf5UfGx95aeFUQ7ZNolkX-U5aFBedxQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
          <h1 className='pewpewgame'>Pew Pew Game</h1>
          <img className= 'comingsoonimg' src='https://s3-alpha-sig.figma.com/img/50ca/5e3c/132472ccf798186d9e2a327f7251e75c?Expires=1653868800&Signature=Og3pfyPk9hoJiUMfAjUdqWbCumCXWWEcHQE39ofOfkSCUcBKEJBMS1s6BzQ3bvpGiHuBk6--kY7iJdK0odEE5px7i0DIqx1UaT4tSQr1JHav6bsJ1b6Rz3XbFfyGhucknlfd5tlTOe0aYgbqEmFr6ytn611WXiIPqX0Ej4~OzLsTj22Pq9Q7o2OS6j606VKP6tM3r1bechEwYoplxmyHAQ-JuPhCpuusTUCtHvbgf1di~Zz0lDgLhRLUNmugdDr4ApOxCc33gds-4sFQfmo~~lZf8raSI5q3VKrc6fT9XEwctQOmm53EzwHxpZFRoDWzxYhXPOIsN9gigVQMO1wNSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
          <h1 className='comingsoon'>Coming soon</h1>
      </div>

        <SignUpForm />

    </div>
  )
}

export default SignUp;