import BasicComponent from "@/interfaces/BasicComponent";

interface Component {
  // VueComponent
  component: BasicComponent; // Component
}

export interface ComponentMap {
  [index: string]: Component;
}

interface MainComponent {
  root: BasicComponent;
}

export interface State {
  main: MainComponent;
  componentsById: ComponentMap;
}

const state: State = {
  main: {
    root: {
      id: "webup",
      loaded: true,
      type: "WUP",
      variables: {}
    }
  },
  componentsById: {}
};

const mutations = {
  clearRoot(state: State) {
    state.main = {
      root: {
        id: "webup",
        loaded: true,
        type: "WUP",
        variables: {}
      }
    };
  },
  setRoot(state: State, root: BasicComponent) {
    state.main.root = root;
  },
  setMain(state: State, mainComponent: MainComponent) {
    state.main = mainComponent;
  },
  addComponent(state: State, vueComponent: Component) {
    // add vue component in componentsById
    if (vueComponent.component.id) {
      state.componentsById[vueComponent.component.id] = vueComponent;
    }
  },
  removeComponent(state: State, vueComponent: Component) {
    // remove vue component from componentsById
    if (vueComponent.component.id) {
      delete state.componentsById[vueComponent.component.id];
    }
  },
  reloadComponent(state: State, component: BasicComponent) {
    // copy root
    const rootCopy = { ...state.main.root };
    // reload component
    let component2update = _getComponent(component.id, rootCopy);
    if (component2update) {
      component2update = Object.assign(component2update, component);
    }
    state.main.root = rootCopy;
  },
  reloadDataComponent(state: State, payload: BasicComponent) {
    // reload data component
    let component2update = _getComponent(payload.id, state.main.root);
    if (component2update) {
      component2update.data = payload.data;
    }
  }
};

const actions = {
  setRoot({ commit }: { commit: any }, root: any) {
    commit("setRoot", root);
  },
  setMain({ commit }: { commit: any }, mainComponent: any) {
    commit("setMain", mainComponent);
  },
  clearRoot({ commit }: { commit: any }) {
    commit("clearRoot");
  },
  addComponent({ commit }: { commit: any }, vueComponent: Component) {
    commit("addComponent", vueComponent);
  },
  removeComponent({ commit }: { commit: any }, vueComponent: Component) {
    commit("removeComponent", vueComponent);
  },
  reloadComponent({ commit }: { commit: any }, component: Component) {
    commit("reloadComponent", component);
  },
  reloadDataComponent({ commit }: { commit: any }, payload: any) {
    commit("reloadDataComponent", payload);
  }
};

const getters = {
  getComponentById(state: any) {
    return (key: string): any => {
      return state.componentsById[key];
    };
  },
  getRoot(state: any) {
    return state.main.root;
  },
  getMain(state: any) {
    return state.main;
  }
};

function _getComponent(
  id: string,
  currentNode: BasicComponent
): BasicComponent | null {
  let i, children, currentChild, result;
  if (id == currentNode.id) {
    return currentNode;
  } else {
    children = _getChildren(currentNode);
    for (i = 0; i < children.length; i += 1) {
      currentChild = children[i];
      result = _getComponent(id, currentChild);
      if (result != null) {
        return result;
      }
    }
    return null;
  }
}

const EXD_TYPE: string = "EXD";

function _getChildren(component: BasicComponent): BasicComponent[] {
  let components: BasicComponent[] = [];
  if (component.type === EXD_TYPE) {
    component.sections.forEach((section: any) => {
      const comps = _getSectionChildren(section);

      components = [...components, ...comps];
    });
  }
  return components;
}

function _getSectionChildren(section: any): BasicComponent[] {
  const components: BasicComponent[] = [];

  if (!!section.sections && section.sections.length > 0) {
    section.sections.forEach((s: any) => {
      const comps = _getSectionChildren(s);
      comps.forEach(c => components.push(c));
    });
  } else if (!!section.components && section.components.length > 0) {
    section.components.forEach((c: BasicComponent) => components.push(c));
  }

  return components;
}

export default {
  state,
  mutations,
  actions,
  getters
};
