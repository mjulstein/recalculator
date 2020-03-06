export enum actionType {
  EQUAL,
  ADD,
  SUBTRACT,
  DIVIDE,
  MULTIPLY,
  MODULO
}

export type historicAction = {action: actionType, value: number};
