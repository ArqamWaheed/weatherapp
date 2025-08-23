import { $cityTextInput } from "./cacheDOM.js";

function validateCityTextInput() {
  // checks for existence only
  if ($cityTextInput.value !== null) {
    return true;
  }
  return false;
}

export { validateCityTextInput };
