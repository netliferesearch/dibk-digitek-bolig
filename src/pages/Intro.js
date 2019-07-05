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
          Svar på noen spørsmål og test ut vår nye måte å vise frem relevant regelverk på. Kun forskriftstekst og veiledningstekst i TEK17 som kan være relevant for det du skal bygge blir markert. Det blir dermed mindre å sette seg inn i. 
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.Lead>
        Pilotprosjektet dekker kun vanlige eneboliger og hytter. Dekker veiviseren det du vil bygge, får du en PDF der kun relevante krav for boligen du vil bygge er fremhevet. 


        </Primitives.Paragraphs.Lead>
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
