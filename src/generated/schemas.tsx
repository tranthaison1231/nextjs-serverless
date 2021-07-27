import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Audit = {
  __typename?: 'Audit';
  id: Scalars['String'];
  utcTime: Scalars['DateTime'];
  ipAddress: Scalars['String'];
  email: Scalars['String'];
  userId: Scalars['String'];
  platform: Scalars['String'];
  auditType: Scalars['String'];
  actorId: Scalars['String'];
  referenceId: Scalars['String'];
};

export type ChangePasswordDto = {
  oldPassWord: Scalars['String'];
  newPassWord: Scalars['String'];
  confirmedPassword: Scalars['String'];
};

export type ConfirmForgotPasswordDto = {
  email: Scalars['String'];
  confirmationCode: Scalars['String'];
  password: Scalars['String'];
  confirmedPassword: Scalars['String'];
};

export type CoordinateInfor = {
  __typename?: 'CoordinateInfor';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type Coordinates = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isoCode?: Maybe<Scalars['String']>;
  languages: Array<Language>;
};

export type CreateNotificationForAllDto = {
  title: Scalars['String'];
  bodyText: Scalars['String'];
  type: UserType;
  emails?: Maybe<Array<Scalars['String']>>;
  topic?: Maybe<NotificationTopic>;
};

export type DealConversation = {
  __typename?: 'DealConversation';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  orderId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  lastMessage?: Maybe<LastMessage>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
  messages?: Maybe<Array<Message>>;
};

export type DeleteFileDto = {
  url: Scalars['String'];
};

export type DeliveryDto = {
  fullName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  /**
   * Field it as JSON
   * Eg: { "city": "Da Nang", "district": "Son Tra", "address": "18 An Nhon 3" }
   */
  address?: Maybe<Scalars['JSON']>;
  dob?: Maybe<Scalars['DateTime']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  userType: UserType;
  email: Scalars['String'];
  transportationIds: Array<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type DeliveryInformationInput = {
  transportationIds: Array<Scalars['String']>;
  expectedCost: Scalars['Float'];
  currency: Scalars['String'];
  note: Scalars['String'];
};

export type FilterDto = {
  field: Scalars['String'];
  operator: QueryOperator;
  data: Scalars['String'];
};

export type ForgotPasswordDto = {
  email: Scalars['String'];
};

/** User gender */
export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export type IAudits = {
  __typename?: 'IAudits';
  meta: MetaPaginationInterface;
  items: Array<Audit>;
};

export type ICountries = {
  __typename?: 'ICountries';
  meta: MetaPaginationInterface;
  items: Array<ICountry>;
};

export type ICountry = {
  __typename?: 'ICountry';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isoCode?: Maybe<Scalars['String']>;
  languages: Array<Language>;
};

export type IDriver = {
  __typename?: 'IDriver';
  id: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  isVerified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  address?: Maybe<Scalars['JSONObject']>;
  dob?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  dealConversations?: Maybe<Array<DealConversation>>;
  userType?: Maybe<UserType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  avgRate?: Maybe<Scalars['Float']>;
  countRate?: Maybe<Scalars['Float']>;
  customerId?: Maybe<Scalars['String']>;
  transportation: Array<Transportation>;
  preferredLanguage: Scalars['String'];
  coordinates?: Maybe<CoordinateInfor>;
  orderReviews?: Maybe<OrderReview>;
};

export type IDrivers = {
  __typename?: 'IDrivers';
  meta: MetaPaginationInterface;
  items: Array<IDriver>;
};

export type IOrderAmountData = {
  __typename?: 'IOrderAmountData';
  key: Scalars['DateTime'];
  user_paid: Scalars['Float'];
  driver_received: Scalars['Float'];
};

export type IOrderAmountReport = {
  __typename?: 'IOrderAmountReport';
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  groupBy: ReportType;
  data: Array<IOrderAmountData>;
};

export type IOrderDashboardData = {
  __typename?: 'IOrderDashboardData';
  key: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type IOrderReport = {
  __typename?: 'IOrderReport';
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  groupBy: ReportType;
  data: Array<IOrderDashboardData>;
};

export type IOrders = {
  __typename?: 'IOrders';
  meta: MetaPaginationInterface;
  items: Array<Order>;
};

export type IPreSignUrl = {
  __typename?: 'IPreSignUrl';
  pathFile: Scalars['String'];
  fileType: Scalars['String'];
  uploadUrl: Scalars['String'];
};

export type IPromotion = {
  __typename?: 'IPromotion';
  id: Scalars['String'];
  code: Scalars['String'];
  type: Scalars['String'];
  amount: Scalars['Float'];
  unit: Scalars['String'];
  condition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type IPromotions = {
  __typename?: 'IPromotions';
  meta: MetaPaginationInterface;
  items: Array<IPromotion>;
};

export type ITransportations = {
  __typename?: 'ITransportations';
  meta: MetaPaginationInterface;
  items: Array<Transportation>;
};

export type IUser = {
  __typename?: 'IUser';
  id: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  isVerified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  address?: Maybe<Scalars['JSONObject']>;
  dob?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  dealConversations?: Maybe<Array<DealConversation>>;
  userType?: Maybe<UserType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  avgRate?: Maybe<Scalars['Float']>;
  countRate?: Maybe<Scalars['Float']>;
  customerId?: Maybe<Scalars['String']>;
  transportation: Array<Transportation>;
  preferredLanguage: Scalars['String'];
  coordinates?: Maybe<CoordinateInfor>;
  orderReviews?: Maybe<OrderReview>;
};

export type IUserDashboard = {
  __typename?: 'IUserDashboard';
  count: Scalars['Float'];
};

export type IUserDashboardData = {
  __typename?: 'IUserDashboardData';
  key: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type IUserReport = {
  __typename?: 'IUserReport';
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  groupBy: ReportType;
  data: Array<IUserDashboardData>;
};

export type IUserVerificationRequest = {
  __typename?: 'IUserVerificationRequest';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  governmentPhotoUrls?: Maybe<Scalars['JSON']>;
  selfiePhotoUrls?: Maybe<Scalars['JSON']>;
  status: VerificationRequestStatus;
  user: User;
};

export type IUserVerificationRequests = {
  __typename?: 'IUserVerificationRequests';
  meta: MetaPaginationInterface;
  items: Array<UserVerificationRequest>;
};

export type IUsers = {
  __typename?: 'IUsers';
  meta: MetaPaginationInterface;
  items: Array<IUser>;
};

export type Language = {
  __typename?: 'Language';
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type LanguageDto = {
  name: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type LastMessage = {
  __typename?: 'LastMessage';
  messageType?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  file?: Maybe<Array<Scalars['String']>>;
  isSeen?: Maybe<Scalars['Boolean']>;
};

export enum MessageType {
  File = 'FILE',
  Text = 'TEXT',
  Photo = 'PHOTO',
}

export type Message = {
  __typename?: 'Message';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  dealConversationId?: Maybe<Scalars['String']>;
  dealConversation?: Maybe<DealConversation>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  messageType?: Maybe<MessageType>;
  text?: Maybe<Scalars['String']>;
  file?: Maybe<Array<Scalars['String']>>;
  isSeen?: Maybe<Scalars['Boolean']>;
};

export type MetaPaginationInterface = {
  __typename?: 'MetaPaginationInterface';
  totalItems: Scalars['Float'];
  itemCount: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalPages: Scalars['Float'];
  currentPage: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  presignedUrlS3: IPreSignUrl;
  deleteFileS3: Scalars['String'];
  upsertUserVerificationRequest: IUserVerificationRequest;
  approveUserVerificationRequest: IUserVerificationRequest;
  denyUserVerificationRequest: IUserVerificationRequest;
  upsertCountry: ICountry;
  disableUser: IUser;
  changePassword: IUser;
  forgotPassword: IUser;
  confirmForgotPassword: IUser;
  enableUser: IUser;
  updateMe: IUser;
  upsertOrder: Order;
  updateOrderPayment: Order;
  upsertTransportation: Transportation;
  deactivateTransportation: Transportation;
  activateTransportation: Transportation;
  upsertPromotion: IPromotion;
  deactivatePromotion: IPromotion;
  activatePromotion: IPromotion;
  upsertDriver: IDriver;
  createNotification: Scalars['String'];
};

export type MutationPresignedUrlS3Args = {
  presignedUrlDto: PresignedUrlDto;
};

export type MutationDeleteFileS3Args = {
  deleteFileDto: DeleteFileDto;
};

export type MutationUpsertUserVerificationRequestArgs = {
  upsertUserVerificationRequestDto: UploadVerificationRequestDto;
};

export type MutationApproveUserVerificationRequestArgs = {
  id: Scalars['String'];
};

export type MutationDenyUserVerificationRequestArgs = {
  id: Scalars['String'];
};

export type MutationUpsertCountryArgs = {
  upsertCountryDto: UpsertCountryDto;
};

export type MutationDisableUserArgs = {
  id: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordDto;
};

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordDto;
};

export type MutationConfirmForgotPasswordArgs = {
  input: ConfirmForgotPasswordDto;
};

export type MutationEnableUserArgs = {
  id: Scalars['String'];
};

export type MutationUpdateMeArgs = {
  input: UpdateMeDto;
};

export type MutationUpsertOrderArgs = {
  upsertOrderDto: UpsertOrderDto;
};

export type MutationUpdateOrderPaymentArgs = {
  updateOrderPaymentDto: UpdateOrderPaymentDto;
};

export type MutationUpsertTransportationArgs = {
  input: UpsertTransportationDto;
};

export type MutationDeactivateTransportationArgs = {
  id: Scalars['String'];
};

export type MutationActivateTransportationArgs = {
  id: Scalars['String'];
};

export type MutationUpsertPromotionArgs = {
  upsertPromotionDto: UpsertPromotionDto;
};

export type MutationDeactivatePromotionArgs = {
  id: Scalars['String'];
};

export type MutationActivatePromotionArgs = {
  id: Scalars['String'];
};

export type MutationUpsertDriverArgs = {
  input: DeliveryDto;
};

export type MutationCreateNotificationArgs = {
  input: CreateNotificationForAllDto;
};

export enum NotificationTopic {
  PikThatForAllUser = 'PikThatForAllUser',
}

export enum OrderStatus {
  LookingForDriver = 'LookingForDriver',
  Accepted = 'Accepted',
  PickedUp = 'PickedUp',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  senderId: Scalars['String'];
  sender?: Maybe<User>;
  senderInfo: UserInfo;
  coordinates?: Maybe<CoordinateInfor>;
  driverId?: Maybe<Scalars['String']>;
  driver?: Maybe<User>;
  status: OrderStatus;
  packageInfo: Array<Package>;
  transportation: Array<Transportation>;
  note?: Maybe<Scalars['String']>;
  finalCost?: Maybe<Scalars['Float']>;
  currency: Scalars['String'];
  cancelReason?: Maybe<Scalars['String']>;
  deliveryScheduledAt: Scalars['DateTime'];
  pickedUpAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  expectedCost?: Maybe<Scalars['Float']>;
  promotionId?: Maybe<Scalars['String']>;
  driverReceivedAmount?: Maybe<Scalars['Float']>;
  userDiscountAmount?: Maybe<Scalars['Float']>;
  commissionInfo?: Maybe<Scalars['JSON']>;
  userPaidAmount?: Maybe<Scalars['Float']>;
  paymentIntentId?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  payment?: Maybe<Payment>;
  packageQuantity?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderAmountReportDto = {
  /** Format: mm/dd/yyyy */
  startDate: Scalars['DateTime'];
  /** Format: mm/dd/yyyy */
  endDate: Scalars['DateTime'];
  groupBy: ReportType;
};

export type OrderReportDto = {
  /** Format: mm/dd/yyyy */
  startDate: Scalars['DateTime'];
  /** Format: mm/dd/yyyy */
  endDate: Scalars['DateTime'];
  groupBy: ReportType;
};

export type OrderReview = {
  __typename?: 'OrderReview';
  id: Scalars['String'];
  senderId: Scalars['String'];
  driverId: Scalars['String'];
  orderId: Scalars['String'];
  rating: Scalars['Float'];
  feedback?: Maybe<Scalars['String']>;
  sender?: Maybe<User>;
};

export enum PaymentTypes {
  Stripe = 'Stripe',
  Cash = 'Cash',
}

export type Package = {
  __typename?: 'Package';
  id?: Maybe<Scalars['String']>;
  receiver: UserInfo;
  weight: Scalars['Float'];
  height: Scalars['Float'];
  description: Scalars['String'];
  images?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<Scalars['String']>;
  deliveryScheduledAt?: Maybe<Scalars['DateTime']>;
  pickedUpAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
};

export type PackageInformationInput = {
  id?: Maybe<Scalars['String']>;
  receiver: UserInput;
  weight: Scalars['Float'];
  height: Scalars['Float'];
  description: Scalars['String'];
  images?: Maybe<Array<Scalars['String']>>;
  status?: Maybe<Scalars['String']>;
  deliveryScheduledAt?: Maybe<Scalars['DateTime']>;
  pickedUpAt?: Maybe<Scalars['DateTime']>;
  completedAt?: Maybe<Scalars['DateTime']>;
};

export type Payment = {
  __typename?: 'Payment';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  paymentType: PaymentTypes;
  stripePaymentMethodInfo?: Maybe<Scalars['JSON']>;
  stripePaymentIntentId?: Maybe<Scalars['String']>;
};

export type PresignedUrlDto = {
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  pathType: S3UploadType;
};

export enum QueryOperator {
  In = 'in',
  Nin = 'nin',
  Eq = 'eq',
  Neq = 'neq',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Like = 'like',
}

export type Query = {
  __typename?: 'Query';
  getUserVerificationRequests: IUserVerificationRequests;
  getUserVerificationRequest: IUserVerificationRequest;
  getCountries: ICountries;
  getCountry: ICountry;
  getMe: IUser;
  getUsers: IUsers;
  getUser: IUser;
  getAudits: IAudits;
  getOrders: IOrders;
  getOrder: Order;
  getOrderOfDriver: IOrders;
  getTransportations: ITransportations;
  getTransportation: Transportation;
  getUserDashboard: IUserDashboard;
  getDriverDashboard: IUserDashboard;
  getUserReport: IUserReport;
  getOrderReport: IOrderReport;
  getOrderAmountReport: IOrderAmountReport;
  getPromotions: IPromotions;
  getPromotion: IPromotion;
  getDrivers: IDrivers;
};

export type QueryGetUserVerificationRequestsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetUserVerificationRequestArgs = {
  id: Scalars['String'];
};

export type QueryGetCountriesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCountryArgs = {
  id: Scalars['String'];
};

export type QueryGetUsersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type QueryGetAuditsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetOrdersArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetOrderArgs = {
  id: Scalars['String'];
};

export type QueryGetOrderOfDriverArgs = {
  driverId: Scalars['String'];
  queryParams: QueryFilterDto;
};

export type QueryGetTransportationsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetTransportationArgs = {
  id: Scalars['String'];
};

export type QueryGetUserReportArgs = {
  filter: UserReportDto;
};

export type QueryGetOrderReportArgs = {
  filter: OrderReportDto;
};

export type QueryGetOrderAmountReportArgs = {
  filter: OrderAmountReportDto;
};

export type QueryGetPromotionsArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetPromotionArgs = {
  id: Scalars['String'];
};

export type QueryGetDriversArgs = {
  queryParams: QueryFilterDto;
};

export type QueryFilterDto = {
  /** - Paginate with limit and offset. Ex: limit:10, page:1 */
  page?: Maybe<Scalars['Float']>;
  /** - Paginate with limit and offset. Ex: limit:10, page:1 */
  limit?: Maybe<Scalars['Float']>;
  /** - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC" */
  orderBy?: Maybe<Scalars['String']>;
  /** - Query by text. Ex: q:"abcxyz" */
  q?: Maybe<Scalars['String']>;
  /**
   * - Filter equal: filters:[{field: "name", operator: eq, data: "Jayce"}]
   * - Filter not equal: filters:[{field: "name", operator: neq, data: "Jayce"}]
   * - Filter less than: filters:[{field: "age", operator: lt, data: 40}]
   * - Filter greater than: filters:[{field: "age", operator: gt, data: 40}]
   * - Filter less than and equal: filters:[{field: "age", operator: lte, data: 40}]
   * - Filter greater than and equal: filters:[{field: "age", operator: gte, data: 40}]
   * - Filter field in many choice: filters:[{field: "name", operator: in, data: "Alex,Julia"}]
   * - Filter field not in many choice: filters:[{field: "name", operator: nin, data: "Alex,Julia"}]
   * - Filter field by text: filters:[{field: "name", operator: like, data: "Jayce"}]
   */
  filters?: Maybe<Array<FilterDto>>;
  /** - Order by fields and order reverse use prefix "ASC or DESC". Ex: orderBy: "createdAt:DESC" */
  coordinates?: Maybe<Coordinates>;
};

export enum ReportType {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
  Hour = 'hour',
}

export type Role = {
  __typename?: 'Role';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<Array<User>>;
};

export enum S3UploadType {
  Public = 'Public',
  Package = 'Package',
  Booking = 'Booking',
  Chatting = 'Chatting',
  Profile = 'Profile',
}

export enum TypePromotion {
  PercentageDiscount = 'PERCENTAGE_DISCOUNT',
  FixedCashDiscount = 'FIXED_CASH_DISCOUNT',
}

export type Transportation = {
  __typename?: 'Transportation';
  id: Scalars['String'];
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserType {
  User = 'User',
  Driver = 'Driver',
  Admin = 'Admin',
}

export type UpdateMeDto = {
  fullName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  /**
   * Field it as JSON
   * Eg: { "city": "Da Nang", "district": "Son Tra", "address": "18 An Nhon 3" }
   */
  address?: Maybe<Scalars['JSON']>;
  dob?: Maybe<Scalars['DateTime']>;
  preferredLanguage?: Maybe<Scalars['String']>;
};

export type UpdateOrderPaymentDto = {
  id: Scalars['String'];
  paymentIntentId?: Maybe<Scalars['String']>;
  promotionCode?: Maybe<Scalars['String']>;
  finalCost: Scalars['Float'];
  tip?: Maybe<Scalars['Float']>;
  currency: Scalars['String'];
};

export type UploadVerificationRequestDto = {
  id?: Maybe<Scalars['String']>;
  governmentPhotoUrls: Scalars['JSON'];
  selfiePhotoUrls: Scalars['JSON'];
};

export type UpsertCountryDto = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  isoCode: Scalars['String'];
  languages: Array<LanguageDto>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpsertOrderDto = {
  id?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  senderId: Scalars['String'];
  sender: UserInput;
  packageInformations: Array<PackageInformationInput>;
  deliveryInformation: DeliveryInformationInput;
  coordinates?: Maybe<Coordinates>;
};

export type UpsertPromotionDto = {
  id?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  type: TypePromotion;
  amount: Scalars['Float'];
  condition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpsertTransportationDto = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['String'];
  isActive: Scalars['Boolean'];
  logoUrl?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  isVerified?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  address?: Maybe<Scalars['JSONObject']>;
  dob?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  dealConversations?: Maybe<Array<DealConversation>>;
  userType?: Maybe<UserType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  avgRate?: Maybe<Scalars['Float']>;
  countRate?: Maybe<Scalars['Float']>;
  customerId?: Maybe<Scalars['String']>;
  transportation: Array<Transportation>;
  preferredLanguage: Scalars['String'];
  coordinates?: Maybe<CoordinateInfor>;
  orderReviews?: Maybe<OrderReview>;
};

export type UserDealConversation = {
  __typename?: 'UserDealConversation';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  dealConversationId?: Maybe<Scalars['String']>;
  dealConversation?: Maybe<DealConversation>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  coordinates?: Maybe<CoordinateInfor>;
};

export type UserInput = {
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  address: Scalars['String'];
};

export type UserReportDto = {
  /** Format: mm/dd/yyyy */
  startDate: Scalars['DateTime'];
  /** Format: mm/dd/yyyy */
  endDate: Scalars['DateTime'];
  groupBy: ReportType;
};

export type UserVerificationRequest = {
  __typename?: 'UserVerificationRequest';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  governmentPhotoUrls?: Maybe<Scalars['JSON']>;
  selfiePhotoUrls?: Maybe<Scalars['JSON']>;
  status: VerificationRequestStatus;
  user: User;
};

export enum VerificationRequestStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Denied = 'Denied',
}

export type MetaFragmentFragment = {
  __typename?: 'MetaPaginationInterface';
} & Pick<
  MetaPaginationInterface,
  'totalItems' | 'itemCount' | 'itemsPerPage' | 'totalPages' | 'currentPage'
>;

export type GetCountriesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetCountriesQuery = { __typename?: 'Query' } & {
  getCountries: { __typename?: 'ICountries' } & {
    meta: { __typename?: 'MetaPaginationInterface' } & MetaFragmentFragment;
    items: Array<
      { __typename?: 'ICountry' } & Pick<
        ICountry,
        'id' | 'createdAt' | 'updatedAt' | 'name' | 'isActive' | 'isoCode'
      >
    >;
  };
};

export const MetaFragmentFragmentDoc = gql`
  fragment MetaFragment on MetaPaginationInterface {
    totalItems
    itemCount
    itemsPerPage
    totalPages
    currentPage
  }
`;
export const GetCountriesDocument = gql`
  query getCountries($queryParams: QueryFilterDto!) {
    getCountries(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        createdAt
        updatedAt
        name
        isActive
        isoCode
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export type GetCountriesQueryHookResult = ReturnType<
  typeof useGetCountriesQuery
>;
export type GetCountriesLazyQueryHookResult = ReturnType<
  typeof useGetCountriesLazyQuery
>;
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>;
