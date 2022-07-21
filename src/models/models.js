import initialState from "../data/initialLanesState.json";

export const laneData = {
    state: initialState,
    reducers: {
      updateLanes: (state, payload) => {
        return state = payload
      },
      selectItem: (state, payload) => {
        return {...state, selectedItem : payload}
      }
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
