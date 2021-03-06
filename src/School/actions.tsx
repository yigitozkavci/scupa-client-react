/// <reference path="typings.d.ts" />

export const startSchoolsIndex = () => {
  return {
    type: 'START_SCHOOLS_INDEX'
  }
}

export const successSchoolsIndex = (schools: School[]) => {
  return {
    type: 'SUCCESS_SCHOOLS_INDEX',
    data: schools
  }
}

export const failSchoolsIndex = () => {
  return {
    type: 'FAIL_SCHOOLS_INDEX'
  }
}
