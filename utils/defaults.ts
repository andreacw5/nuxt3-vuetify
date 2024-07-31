import type { DefaultsInstance } from "vuetify";

// Default values for Vuetify components
export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 0,
  },
  VBtn: {
    variant: "flat",
    height: 38,
    rounded: "lg",
    size: "small",
  },
  VTextField: {
    color: "primary",
    variant: "outlined",
    density: "comfortable",
  },
};
