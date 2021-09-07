export interface RandomUserApi {
  results: User[];
  info: Info;
}

export interface UserIntended {
  email?: any;
  gender?: any;
  phone?: any;
  cell?: any;
  nat?: any;
  location?: any;
  name?: any;
  id?: any;
  login?: any;
  registered?: any;
  dob?: any;
  picture?: any;
}

export interface User {
  email?: any;
  gender?: any;
  phone?: any;
  cell?: any;
  nat?: any;
  location?: Location;
  name?: Name;
  id?: ID;
  login?: Login;
  registered?: Registered;
  dob?: DOB;
  picture?: Picture;
}

export interface Location {
  street?: Street,
  city?: any,
  state?: any,
  country?: any,
  postcode?: any,
  coordinates?: Coordinates,
  timezone?: Timezone
}

export interface Coordinates {
  latitude?: any,
  longitude?: any
}

export interface Timezone {
  offset?: any,
  description?: any
}

export interface Picture {
  large?: any,
  medium?: any,
  thumbnail?: any
}

export interface ID {
  name?: any,
  value?: any
}

export interface Registered {
  date?: any,
  age?: any
}

export interface DOB {
  date?: any,
  age?: any
}

export interface Login {
  uuid?: any;
  username?: any;
  password?: any;
  salt?: any;
  md5?: any;
  sha1?: any;
  sha256?: any;
}

export interface Street {
  number?: any;
  name?: any;
}

export interface Name {
  title?: any;
  first?: any;
  last?: any;
}

export interface Info {
  seed?: any;
  results?: any;
  page?: any;
  version?: any;
}
