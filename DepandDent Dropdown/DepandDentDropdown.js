import Select from "react-select";

const options = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    // ... add more states here
  ];
  
  const countiesByState = {
    Alabama: [
      { value: 'Autauga', label: 'Autauga' },
      { value: 'Baldwin', label: 'Baldwin' },
      { value: 'Barbour', label: 'Barbour' },
      // ... add more counties here
    ],
    Alaska: [
      { value: 'Aleutians East', label: 'Aleutians East' },
      { value: 'Aleutians West', label: 'Aleutians West' },
      { value: 'Anchorage', label: 'Anchorage' },
      // ... add more counties here
    ],
    Arizona: [
      { value: 'Apache', label: 'Apache' },
      { value: 'Cochise', label: 'Cochise' },
      { value: 'Coconino', label: 'Coconino' },
      // ... add more counties here
    ],
    // ... add more states and counties here
  };
  
  const citiesByCounty = {
    Autauga: [
      { value: 'Prattville', label: 'Prattville' },
      { value: 'Millbrook', label: 'Millbrook' },
      { value: 'Marbury', label: 'Marbury' },
      // ... add more cities here
    ],
    Baldwin: [
      { value: 'Gulf Shores', label: 'Gulf Shores' },
      { value: 'Daphne', label: 'Daphne' },
      { value: 'Fairhope', label: 'Fairhope' },
      // ... add more cities here
    ],
    // ... add more counties and cities here
  };
  
  export const DependentDropdown = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCounty, setSelectedCounty] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
  
    const handleStateChange = (selectedOption) => {
      setSelectedState(selectedOption);
      setSelectedCounty(null);
      setSelectedCity(null);
    };
  
    const handleCountyChange = (selectedOption) => {
      setSelectedCounty(selectedOption);
      setSelectedCity(null);
    };
  
    const handleCityChange = (selectedOption) => {
      setSelectedCity(selectedOption);
    };
  
    const countyOptions = selectedState ? countiesByState[selectedState.value] : [];
    const cityOptions = selectedCounty ? citiesByCounty[selectedCounty.value] : [];
  
    return (
      <div>
        <Select
          options={options}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Select a state"
        />
        <Select
          options={countyOptions}
          value={selectedCounty}
          onChange={handleCountyChange}
          placeholder="Select a county"
          isDisabled={!selectedState}
        />
        <Select
          options={cityOptions}
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Select a city"
          isDisabled={!selectedCounty}
        />
      </div>
  
    )}