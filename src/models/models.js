import data from "../data/test-tasks.json";

export const lanes = {
    state: data,
    reducers: {
      updateLanes: (state, payload) => [...state, payload],
    },
    effects: (dispatch) => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async updateLanesAsync(payload, rootState) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          dispatch.count.updateLanes(payload);
        },
      }),
  };