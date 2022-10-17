var declaration:
1. values added:  20
2. final result:  20
3. values added:  20
4. ReferenceError: result is not defined
   This is because the var variable result was function-scoped, but when it was declared as a let variable, it is only visible withnin the scope of the if-statement. Therefore, result becomes undefned outside of the if-scope.
5. TypeError: Assignment to constant variable.
   This is because result is declared and defined as a constant that has the value 0. On line 7, we are trying to modify result's value, which is not allowed after the initial assignment of the constant variable result.
6. TypeError: Assignment to constant variable.
   The error occured at line 7's assignment, so the lines afterwards were not executed, and there was no output corresponding to line 13.