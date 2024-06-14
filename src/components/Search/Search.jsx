import { Container, Select, SelectCountry } from "./styledSearch";

function Search ({ country, onHandleCountry }) {
    return (
        <Container>
            <SelectCountry>Selecione o pais desejado:</SelectCountry>
            <Select value={country} onChange={e => onHandleCountry(e.target.value)}>
                <option>USA</option>
                <option>BRA</option>
                <option>CAN</option>
            </Select>
        </Container>
    )
}

export default Search;