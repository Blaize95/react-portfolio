import React from 'react';
import Avatar from 'avataaars';

function Header() {
  return (
    <div className="home">
      <h1>Blaize Underwood</h1>
      <div>
        <Avatar
          avatarStyle='Circle'
          topType='ShortHairShaggyMullet'
          accessoriesType='Prescription01'
          hairColor='Brown'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='Black'
          eyeType='EyeRoll'
          eyebrowType='FlatNatural'
          mouthType='Concerned'
          skinColor='Tanned'
        />
      </div>
      <p>Hi there! My name is Blaize, and I'm a web developer based in the Sunshine Coast, Australia. I am currently studying in building responsive, user-friendly websites using HTML, CSS, and JavaScript. When I'm not coding, you can find me playing video games or going for a surf. Thanks for visiting my portfolio!</p>
    </div>
  );
}

export default Header;

