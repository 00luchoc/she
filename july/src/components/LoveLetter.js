// src/components/LoveLetter.js
import React, { useState } from 'react';
import './LoveLetter.css';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  return (
    <div className={`letter-container ${isOpen ? 'open' : ''}`} onClick={!isOpen ? handleOpenLetter : null}>
      <div className="envelope">
        <div className="envelope-flap"></div>
        <div className="envelope-body"></div>
        <div className="envelope-heart" onClick={handleOpenLetter}>❤️</div>
        {!isOpen && <div className="click-prompt">Abrime ;)</div>}
      </div>

      <div className="letter-paper">
        <h2>To my dearest july:</h2>
        <p>Te escribo esta carta porque probablemente sea el fin definitivo de nuestra relacion, de todo lo que fuimos y de lo que pudimos llegar a ser, no
          voy a victimizarme ni tratar de hacerlo muy triste, solo quiero explayar todo lo que senti desde que te conoci hasta el dia de hoy, estoy algo inspirado
          porque estoy escribiendo esto escuchando la playlist que te hice jaja. Mi interes por vos existia desde antes de que te conozca en el 15 de lu, no se
          si te conte, pero ella me habia mostrado que eras su amiga, fotos, etc. me acuerdo bien que te vi y al toque me llamaste la atencion geniunamente, no se
          si algo amoroso en ese entonces, pero desde ahi que yo queria ser tu amigo, estar en tu vida, me gustaba mucho lo que transmitias con solo verte
          despues cuando nos conocimos en el 15, de entrada habia buena onda, eras copada, chistosa y hasta me hablaste de tus intereses, me acuerdo que esa noche la idea
          principal era que me metan con ara jajaja, aun asi, senti q habia conectado mas con vos, te me hacias tan interesante, hablando de estrellas, haciendo chistes, siendo vos
          que eso es lo que siempre ame tanto, cuando porfin empezamos a hablar y pudimos ser amigos, me sentia muy feliz, con vos podia ser como soy, siempre
          trate de encajar con todos, adaptandome a su humor, su estilo, todo, pero con vos fue diferente, con vos pude ser finalmente yo, pude contar cada
          cosa que sentia y pensaba sin miedo a ser juzgado. Despues inevitablemente me empezaste a gustar, fuera de que sos muy linda piba, para mi encontrar
          a alguien que me entendia tanto significaba muchisimo y ademas amaba estar con vos, cuando hablabamos sin parar, cuando reiamos sin parar, cuando simplemente
          estabamos callados pero comodos estando ahi. Esa vez llegue a sentir que me estaba enamorando de vos, cuando mi prima me preguntaba quien me gustaba, yo no
          podia evitar sonreir de lado a lado, pero te juro que asi era, me sentia tan feliz por sentir eso.. fuiste la primer mujer por la que llore tanto, ni siquiera en mi
          relacion anterior, siempre era tan frustrante saber que no habia sido lo suficiente bueno para que te fijes en mi, pero yo te amaba tanto, que no pude
          no tenerte en mi vida, incluso cuando te trataban de macumbera, de falsa, de pelotuda, de inmadura, nunca opine nada, solo pensaba "July no debe ser asi, yo confio
          que no" nunca quise dejarte sola, a principio de año, cuando estaba todo en la mierda, yo dejaba de lado mis vinculo por acompañarte, porque estabas totalmente sola sin
          merecerlo, ahora por suerte tenes tu grupo, tus amigos, ya no estas sola y es ironico que ahora que es asi yo no voy a estar mas en tu vida, es triste, pero puedo aceptarlo
          total estas mejor, al menos el cole ya no es tan un lugar de mierda para vos. Solo se que nunca voy a olvidarte, estos casi 4 años que te conozco, fueron posta los mejores
          ojala tuvieras una idea de que tan importante fuiste y sos para mi, gracias por nunca haberme dejado solo.
          Creo que me fui un poco de tema pero bueno, cuando finalmente fuimos mejores amigos, se que tuvimos veces en las que nos tirabamos onda medio discreto jaja, yo me daba cuenta
          pero fui cagon solo por el hecho de que antes me habias rechazado y yo te habia prometido no volver a confundir las cosas, no queria perderte. Se que yo decia que no
          arruinaria la amistad y, al principio no, pero despues cuando pasaba el tiempo mas conviviamos, mas me daba cuenta de que era dificil no gustar de vos, y claramente con esto
          compruebo que si alguna vez me gustaste, nunca va a ser diferente, ni siquiera puedo pedirte volver a ser amigos despues de esto, no va a ser lo mismo, ya lo tenes a joel.
          Nuestro mejores amigos quedo atras, y esa es otra cosa que me duele en el alma, no sabes la impotencia que siento de saber que no puedo hacer que te quedes por ningun lado
          , en parte es mi culpa, yo te mande ese mensaje el otro dia, yo mismo me eche pero tampoco podia con la frialdad que tenias, aunque ese es un tema aparte. Este tiempo que
          tuvimos "algo" tambien fue muy lindo, pese a que hubo peleas, quejas, yo ame estar con vos, poder por fin abrazarte y besarte sin miedo, y el dia que fui a tu casa... nunca voy a olvidar
          ese dia, poder estar abrazado a vos, en silencio, tranquilo, dandote amor, simplemente estando con la persona que mas amo, no tiene precio y es una experiencia que nunca
          pero nunca voy a olvidar y me siento feliz y orgulloso de que fue con vos.<br/><br/>
          Se que no fui el mejor, ni que hice muy bien las cosas, y es triste porque siempre pense que yo podria trarte mejor que todos los pelotudos que te hacian mal, al final termine
          siendo uno mas de esos, pero creeme que me esforce y lo di todo por vos, por hacerte feliz y que te sientas amada, perdon por todo el mal que hice, solo queria devolverte el favor
          y hacerte igual de bien que como me hiciste a mi. No quiero que esta sea una despedida, nunca pierdo la esperanza de que vuelvas a estar en mi vida alguna vez, pero solo
          se que ahora estas en otra, con otra mentalidad e intolerante a los problemas y esta bien, me pone feliz saber que por fin te haces respetar y te das mas valor, espero sigas
          asi siempre, sos posta una piba increible, quisiera que esta carta quede como recuerdo de nosotros asi por lo menos algo te queda de mi, te voy a extrañar.<br/><br/>
          Con amor,<br/>Lucho.</p>
      </div>
    </div>
  );
}

export default LoveLetter;
