import { $cityTextInput } from "./cacheDOM.js";

function validateCityTextInput() {
  // checks for existence only
  if ($cityTextInput.value !== "") {
    return true;
  }
  return false;
}

export { validateCityTextInput };
