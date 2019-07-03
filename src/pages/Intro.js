import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data: { $computed, ...data } }) {
  if (Object.keys(data).length > 0) {
    close();
  }
  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Skal du bygge enebolig eller hytte?</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
          Vi tester ut en ny måte å vise frem regelverket på. Målet er å gjøre det enklere å finne hvilke
          byggtekniske krav som gjelder vanlige eneboliger og hytter. Relevante krav i byggteknisk forskrift
          (TEK17) blir gulet ut. Du slipper derfor å lese hele forskriften og veiledningen for å finne ut
          hvilke krav som gjelder.
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.P>
          For å finne ut om det du skal bygge dekkes av veiviseren, må du svare på noen spørsmål om boligen.
          Svarene dine gir deg reglene for boligen du vil bygge.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
