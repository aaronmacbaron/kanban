import { init } from "@rematch/core";
import * as models from "../models/models";

const store = init({models});

export default store;