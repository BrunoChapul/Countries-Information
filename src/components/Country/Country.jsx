import { Container, Flag, InfoContainer, FlagName, Continent, Infos } from "./styledCountry";

function Country ({ countrySelected }) {

    function formatNumb(value) {
        return parseFloat(value).toLocaleString('en-US', {minimumIntegerDigits: 3});
    }

    return (
        <Container>
            {countrySelected && <>
                <Flag src={countrySelected.flags.png} />
                <InfoContainer>  
                    <FlagName>{countrySelected.name.common}</FlagName>
                    <Continent>{countrySelected.continents[0]}</Continent>
                    <Infos>👫 Population: {formatNumb(countrySelected.population)} Persons</Infos>
                    <Infos>🗣️ Language: {Object.entries(countrySelected.languages)[0][1]}</Infos>
                    <Infos>💰 Coin: {Object.entries(countrySelected.currencies)[0][1].name}</Infos>
                </InfoContainer>
            </>}
        </Container>
    )
}

export default Country;