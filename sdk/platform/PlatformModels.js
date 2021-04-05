const Joi = require("joi");
class Validator {
  static TicketList() {
    return Joi.object({
      items: Joi.array().items(this.Ticket()),

      filters: this.Filter(),

      page: this.Page(),
    });
  }

  static Page() {
    return Joi.object({
      itemTotal: Joi.number(),

      nextId: Joi.string(),

      hasPrevious: Joi.boolean(),

      hasNext: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string(),

      size: Joi.number(),
    });
  }

  static TicketHistoryList() {
    return Joi.object({
      docs: Joi.array().items(this.TicketHistory()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  }

  static CustomFormList() {
    return Joi.object({
      docs: Joi.array().items(this.CustomForm()),

      limit: Joi.number(),

      page: Joi.number(),

      pages: Joi.number(),

      total: Joi.number(),
    });
  }

  static CreateCustomFormPayload() {
    return Joi.object({
      slug: Joi.string(),

      title: Joi.string(),

      inputs: Joi.array().items(Joi.object()),

      description: Joi.string(),

      headerImage: Joi.string(),

      shouldNotify: Joi.boolean(),

      successMessage: Joi.string(),

      pollForAssignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string(),

      inputs: Joi.array().items(Joi.object()),

      description: Joi.string(),

      headerImage: Joi.string(),

      shouldNotify: Joi.boolean(),

      loginRequired: Joi.boolean(),

      successMessage: Joi.string(),

      pollForAssignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assignedTo: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agentId: Joi.string(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      uniqueName: Joi.string(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      uniqueName: Joi.string(),

      notify: Joi.array().items(Joi.object()),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()),

      assignees: Joi.array().items(Joi.object()),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object(),

      type: Joi.string(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      accessToken: Joi.string(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()),
    });
  }

  static Participant() {
    return Joi.object({
      user: this.UserSchema(),

      identity: Joi.string(),

      status: Joi.string(),
    });
  }

  static UserSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      phoneNumbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string(),

      active: Joi.boolean(),

      profilePicUrl: Joi.string(),

      username: Joi.string(),

      accountType: Joi.string(),

      uid: Joi.string(),

      debug: this.Debug(),

      hasOldPasswordHash: Joi.boolean(),

      id: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      countryCode: Joi.number(),
    });
  }

  static Email() {
    return Joi.object({
      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),

      active: Joi.boolean(),
    });
  }

  static Debug() {
    return Joi.object({
      source: Joi.string(),

      platform: Joi.string(),
    });
  }

  static SubmitCustomFormResponse() {
    return Joi.object({
      ticket: this.Ticket(),
    });
  }

  static TicketContext() {
    return Joi.object({
      applicationId: Joi.string(),

      companyId: Joi.string(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      userAgent: Joi.string(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string(),

      priority: Joi.string(),

      category: Joi.string(),

      content: this.TicketContent(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      color: Joi.string(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string(),

      titleColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number(),

      message: Joi.string(),

      successMessage: Joi.string(),

      failureMessage: Joi.string(),
    });
  }

  static CustomForm() {
    return Joi.object({
      applicationId: Joi.string(),

      slug: Joi.string(),

      headerImage: Joi.string(),

      title: Joi.string(),

      description: Joi.string(),

      loginRequired: Joi.boolean(),

      shouldNotify: Joi.boolean(),

      successMessage: Joi.string(),

      submitButton: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()),

      createdOn: this.CreatedOn(),

      createdBy: Joi.object(),

      pollForAssignment: this.PollForAssignment(),

      id: Joi.string(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.object(),

      ticketId: Joi.string(),

      createdOn: this.CreatedOn(),

      createdBy: Joi.object(),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      createdOn: this.CreatedOn(),

      responseId: Joi.string(),

      content: this.TicketContent(),

      ticketId: Joi.string(),

      category: this.TicketCategory(),

      source: Joi.string(),

      status: this.Status(),

      priority: this.Priority(),

      createdBy: Joi.object(),

      assignedTo: Joi.object(),

      tags: Joi.array().items(Joi.string()),

      customJson: Joi.object(),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),

      type: Joi.string(),

      current: Joi.number(),
    });
  }

  static ThemesListingResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.ThemesSchema()),

      page: this.PaginationSchema(),
    });
  }

  static AddThemeRequestSchema() {
    return Joi.object({
      themeId: Joi.string(),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parentTheme: Joi.string(),

      appliedTheme: Joi.string(),

      upgrade: Joi.boolean(),
    });
  }

  static FontsSchema() {
    return Joi.object({
      items: this.FontsSchemaItems(),

      kind: Joi.string(),
    });
  }

  static BlitzkriegApiErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BlitzkriegNotFoundSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BlitzkriegInternalServerErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static FontsSchemaItems() {
    return Joi.object({
      family: Joi.string(),

      variants: Joi.array().items(Joi.string()),

      subsets: Joi.array().items(Joi.string()),

      version: Joi.string(),

      lastModified: Joi.string(),

      files: this.FontsSchemaItemsFiles(),

      category: Joi.string(),

      kind: Joi.string(),
    });
  }

  static FontsSchemaItemsFiles() {
    return Joi.object({
      regular: Joi.string(),

      italic: Joi.string(),

      bold: Joi.string(),
    });
  }

  static ThemesSchema() {
    return Joi.object({
      application: Joi.string(),

      applied: Joi.boolean(),

      customized: Joi.boolean(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      version: Joi.string(),

      parentThemeVersion: Joi.string(),

      parentTheme: Joi.string(),

      information: this.Information(),

      tags: Joi.array().items(Joi.string()),

      src: this.Src(),

      assets: this.AssetsSchema(),

      availablePages: this.AvailablePages(),

      pages: this.Pages(),

      availableSections: Joi.array().items(this.availableSectionSchema()),

      sections: Joi.array().items(this.sectionSchema()),

      constants: Joi.object(),

      styles: Joi.object(),

      config: this.Config(),

      settings: Joi.object(),

      font: this.Font(),

      id: Joi.string(),

      v: Joi.number(),

      colors: this.Colors(),
    });
  }

  static pagesSchema() {
    return Joi.object({
      text: Joi.string(),

      path: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      sections: this.Sections(),
    });
  }

  static availableSectionSchema() {
    return Joi.object({
      blocks: this.Blocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),
    });
  }

  static sectionSchema() {
    return Joi.object({
      pageKey: Joi.string(),

      pageSections: this.PageSections(),
    });
  }

  static Information() {
    return Joi.object({
      images: this.Images(),

      features: Joi.array().items(Joi.string()),

      name: Joi.string(),

      description: Joi.string(),
    });
  }

  static Images() {
    return Joi.object({
      desktop: Joi.array().items(Joi.string()),

      android: Joi.array().items(Joi.string()),

      ios: Joi.array().items(Joi.string()),

      thumbnail: Joi.array().items(Joi.string()),
    });
  }

  static Src() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static AssetsSchema() {
    return Joi.object({
      umdJs: this.UmdJs(),

      commonJs: this.CommonJs(),

      css: this.Css(),
    });
  }

  static UmdJs() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static CommonJs() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static Css() {
    return Joi.object({
      link: Joi.string(),
    });
  }

  static AvailablePages() {
    return Joi.object({
      path: Joi.string(),

      type: Joi.string(),

      text: Joi.string(),

      value: Joi.string(),

      seo: this.Seo(),

      props: Joi.object(),

      sections: this.Sections(),
    });
  }

  static Seo() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static Sections() {
    return Joi.object({
      attributes: Joi.string(),
    });
  }

  static Pages() {
    return Joi.object({
      collectionListing: this.pagesSchema(),

      brands: this.pagesSchema(),

      cartLanding: this.pagesSchema(),

      collections: this.pagesSchema(),

      productDescription: this.pagesSchema(),

      productListing: this.pagesSchema(),

      home: this.pagesSchema(),

      categories: this.pagesSchema(),

      compareProducts: this.pagesSchema(),

      wishlist: this.pagesSchema(),
    });
  }

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      globalSchema: this.GlobalSchema(),

      current: Joi.string(),

      list: this.ListSchema(),
    });
  }

  static Preset() {
    return Joi.object({
      sections: this.sectionSchema(),
    });
  }

  static GlobalSchema() {
    return Joi.object({
      props: Joi.object(),
    });
  }

  static ListSchema() {
    return Joi.object({
      global: Joi.object(),

      page: this.ConfigPage(),

      name: Joi.string(),
    });
  }

  static Colors() {
    return Joi.object({
      bgColor: Joi.string(),

      primaryColor: Joi.string(),

      secondaryColor: Joi.string(),

      accentColor: Joi.string(),

      linkColor: Joi.string(),

      buttonSecondaryColor: Joi.string(),
    });
  }

  static Custom() {
    return Joi.object({
      props: Joi.object(),
    });
  }

  static ConfigPage() {
    return Joi.object({
      settings: Joi.object(),

      page: Joi.string(),
    });
  }

  static Font() {
    return Joi.object({
      family: Joi.string(),

      variants: this.Variants(),
    });
  }

  static Variants() {
    return Joi.object({
      medium: this.Medium(),

      semiBold: this.SemiBold(),

      bold: this.Bold(),

      light: this.Light(),

      regular: this.Regular(),
    });
  }

  static Medium() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static SemiBold() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Bold() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Light() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Regular() {
    return Joi.object({
      name: Joi.string(),

      file: Joi.string(),
    });
  }

  static Blocks() {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.BlocksProps(),
    });
  }

  static BlocksProps() {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  }

  static PageSections() {
    return Joi.object({
      blocks: this.PageSectionsBlocks(),

      name: Joi.string(),

      label: Joi.string(),

      props: Joi.object(),

      preset: Joi.object(),

      predicate: this.Predicate(),
    });
  }

  static PageSectionsBlocks() {
    return Joi.object({
      type: Joi.string(),

      name: Joi.string(),

      props: this.PageSectionsBlocksProps(),
    });
  }

  static PageSectionsBlocksProps() {
    return Joi.object({
      id: Joi.string(),

      label: Joi.string(),

      type: Joi.string(),
    });
  }

  static Predicate() {
    return Joi.object({
      screen: this.Screen(),

      user: this.PredicateUserSchema(),

      route: this.Route(),
    });
  }

  static Screen() {
    return Joi.object({
      mobile: Joi.boolean(),

      desktop: Joi.boolean(),

      tablet: Joi.boolean(),
    });
  }

  static PredicateUserSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),

      anonymous: Joi.boolean(),
    });
  }

  static Route() {
    return Joi.object({
      selected: Joi.string(),

      exactUrl: Joi.string(),

      query: Joi.object(),
    });
  }

  static EditEmailRequestSchema() {
    return Joi.object({
      email: Joi.string(),
    });
  }

  static SendVerificationLinkMobileRequestSchema() {
    return Joi.object({
      verified: Joi.boolean(),

      active: Joi.boolean(),

      countryCode: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      countryCode: Joi.string(),

      phone: Joi.string(),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      mobile: Joi.string(),

      email: Joi.string(),

      gender: Joi.string(),

      dob: Joi.string(),

      profilePicUrl: Joi.string(),

      androidHash: Joi.string(),

      sender: Joi.string(),

      registerToken: Joi.string(),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      registerToken: Joi.string(),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      requestId: Joi.string(),

      registerToken: Joi.string(),

      otp: Joi.string(),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string(),

      countryCode: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      androidHash: Joi.string(),

      force: Joi.string(),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      oldPassword: Joi.string(),

      newPassword: Joi.string(),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      registerToken: Joi.string(),
    });
  }

  static TokenRequestBodySchema() {
    return Joi.object({
      token: Joi.string(),
    });
  }

  static ForgotPasswordRequestSchema() {
    return Joi.object({
      code: Joi.string(),

      password: Joi.string(),
    });
  }

  static CodeRequestBodySchema() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static SendResetPasswordEmailRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      gRecaptchaResponse: Joi.string(),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      gRecaptchaResponse: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      countryCode: Joi.string(),

      gRecaptchaResponse: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      isSignedIn: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      registerToken: Joi.string(),

      userExists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static LoginSuccess() {
    return Joi.object({
      user: this.UserSchema(),
    });
  }

  static VerifyOtpSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      userExists: Joi.boolean(),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static VerifyEmailSuccess() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static HasPasswordSuccess() {
    return Joi.object({
      result: Joi.boolean(),
    });
  }

  static LogoutSuccess() {
    return Joi.object({
      logout: Joi.boolean(),
    });
  }

  static OtpSuccess() {
    return Joi.object({
      resendTimer: Joi.number(),

      resendToken: Joi.string(),

      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resendToken: Joi.string(),
    });
  }

  static SessionListSuccess() {
    return Joi.object({
      sessions: Joi.array().items(Joi.string()),
    });
  }

  static VerifyMobileOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verifyMobileLink: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verifyEmailLink: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verifyMobileLink: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verifyEmailLink: Joi.boolean(),
    });
  }

  static UserSearchResponseSchema() {
    return Joi.object({
      users: Joi.array().items(this.UserSchema()),
    });
  }

  static CustomerListResponseSchema() {
    return Joi.object({
      items: Joi.array().items(this.UserSchema()),

      page: this.PaginationSchema(),
    });
  }

  static UnauthorizedSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnauthenticatedSchema() {
    return Joi.object({
      authenticated: Joi.boolean(),
    });
  }

  static NotFoundSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static AuthenticationApiErrorSchema() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ProfileEditSuccessSchema() {
    return Joi.object({
      email: Joi.string(),

      verifyEmailOtp: Joi.boolean(),

      verifyEmailLink: Joi.boolean(),

      verifyMobileOtp: Joi.boolean(),

      user: Joi.string(),

      registerToken: Joi.string(),

      userExists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      countryCode: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      accessToken: Joi.string(),

      expiry: Joi.number(),

      refreshToken: Joi.string(),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      lastName: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      fullName: Joi.string(),

      firstName: Joi.string(),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      firstName: Joi.string(),

      lastName: Joi.string(),

      debug: this.AuthSuccessUserDebug(),

      active: Joi.boolean(),

      emails: this.AuthSuccessUserEmails(),
    });
  }

  static AuthSuccessUserDebug() {
    return Joi.object({
      platform: Joi.string(),
    });
  }

  static AuthSuccessUserEmails() {
    return Joi.object({
      email: Joi.string(),

      verified: Joi.boolean(),

      primary: Joi.boolean(),

      active: Joi.boolean(),
    });
  }

  static PlatformSchema() {
    return Joi.object({
      display: Joi.string(),

      lookAndFeel: this.LookAndFeel(),

      updatedAt: Joi.string(),

      active: Joi.boolean(),

      forgotPassword: Joi.boolean(),

      login: this.Login(),

      skipCaptcha: Joi.boolean(),

      name: Joi.string(),

      meta: this.MetaSchema(),

      id: Joi.string(),

      social: this.Social(),

      requiredFields: this.RequiredFields(),

      registerRequiredFields: this.RegisterRequiredFields(),

      skipLogin: Joi.boolean(),

      flashCard: this.FlashCard(),

      subtext: Joi.string(),

      socialTokens: this.SocialTokens(),

      createdAt: Joi.string(),

      register: Joi.boolean(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      cardPosition: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static Login() {
    return Joi.object({
      password: Joi.boolean(),

      otp: Joi.boolean(),
    });
  }

  static MetaSchema() {
    return Joi.object({
      fyndDefault: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      accountKit: Joi.boolean(),

      facebook: Joi.boolean(),

      google: Joi.boolean(),
    });
  }

  static RequiredFields() {
    return Joi.object({
      email: this.Email(),

      mobile: this.Mobile(),
    });
  }

  static Mobile() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFields() {
    return Joi.object({
      email: this.RegisterRequiredFieldsEmail(),

      mobile: this.RegisterRequiredFieldsMobile(),
    });
  }

  static RegisterRequiredFieldsEmail() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      isRequired: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string(),

      textColor: Joi.string(),

      backgroundColor: Joi.string(),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      accountKit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static Facebook() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Accountkit() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Google() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string(),

      tnc: Joi.string(),

      policy: Joi.string(),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      id: Joi.string(),

      updatedAt: Joi.string(),

      createdAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string(),

      content: Joi.string(),
    });
  }

  static Detail() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static StorefrontAnnouncement() {
    return Joi.object({
      announcements: this.AnnouncementSchema(),

      refreshRate: Joi.number(),

      refreshPages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      pageSlug: Joi.string(),

      type: Joi.string(),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foregroundColor: Joi.string(),

      backgroundColor: Joi.string(),

      contentType: Joi.string(),

      content: Joi.string(),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      createdBy: Joi.string(),

      modifiedBy: Joi.string(),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      id: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      title: Joi.string(),

      announcement: Joi.string(),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editorMeta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      createdAt: Joi.string(),

      app: Joi.string(),

      modifiedAt: Joi.string(),

      schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string(),

      published: Joi.boolean(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),

      nextSchedule: Joi.array().items(Joi.object()),
    });
  }

  static NextSchedule() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static AnnouncementSchema() {
    return Joi.object({
      pageSlug: Joi.array().items(Joi.object()),
    });
  }

  static announcementSchema() {
    return Joi.object({
      announcement: Joi.string(),

      schedule: this.scheduleStartSchema(),
    });
  }

  static scheduleStartSchema() {
    return Joi.object({
      start: Joi.string(),
    });
  }

  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static ResourceContent() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static Asset() {
    return Joi.object({
      secureUrl: Joi.string(),
    });
  }

  static Author() {
    return Joi.object({
      designation: Joi.string(),

      id: Joi.string(),

      name: Joi.string(),
    });
  }

  static BlogSchema() {
    return Joi.object({
      id: Joi.array().items(Joi.any()),

      schedule: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      dateMeta: this.DateMeta(),
    });
  }

  static DateMeta() {
    return Joi.object({
      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static BlogRequest() {
    return Joi.object({
      schedule: Joi.string(),

      application: Joi.string(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),
    });
  }

  static CreateAnnouncementSchema() {
    return Joi.object({
      message: Joi.string(),

      data: this.AdminAnnouncementSchema(),
    });
  }

  static Navigation() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      orientation: Joi.string(),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      position: Joi.string(),

      application: Joi.string(),

      platform: Joi.string(),

      navigation: this.NavigationReference(),
    });
  }

  static LocaleLanguage() {
    return Joi.object({
      hi: this.Language(),

      ar: this.Language(),

      enUs: this.Language(),
    });
  }

  static Language() {
    return Joi.object({
      display: Joi.string(),
    });
  }

  static Action() {
    return Joi.object({
      page: this.Page(),

      popup: this.Page(),

      type: Joi.string(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.any(),

      localeLanguage: this.LocaleLanguage(),

      image: Joi.string(),

      type: Joi.string(),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string(),

      sortOrder: Joi.number(),

      subNavigation: this.NavigationReference(),
    });
  }

  static LandingPage() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.any()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      application: Joi.string(),
    });
  }

  static ConfigurationSchema() {
    return Joi.object({
      sleepTime: Joi.number(),

      startOnLaunch: Joi.boolean(),

      duration: Joi.number(),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),

      bgColor: Joi.string(),

      duration: Joi.number(),

      autoDecideDuration: Joi.boolean(),

      action: this.Action(),
    });
  }

  static Slideshow() {
    return Joi.object({
      id: Joi.string(),

      slug: Joi.string(),

      dateMeta: this.DateMeta(),

      application: Joi.string(),

      name: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.Media()),

      active: Joi.boolean(),
    });
  }

  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.array().items(this.AnnouncementDataSchema()),

      refreshRate: Joi.number(),

      refreshPages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementDataSchema() {
    return Joi.object({
      pageSlug: Joi.string(),

      announcement: this.StorefrontAnnouncement(),
    });
  }

  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(this.FAQ()),
    });
  }

  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: this.HandpickedTagSchema(),
    });
  }

  static HandpickedTagSchema() {
    return Joi.object({
      position: Joi.string(),

      attributes: Joi.object(),

      name: Joi.string(),

      type: Joi.string(),

      subType: Joi.string(),

      content: Joi.string(),
    });
  }

  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),
    });
  }

  static CreateTagSchema() {
    return Joi.object({
      name: Joi.string(),

      subType: Joi.string(),

      id: Joi.string(),

      type: Joi.string(),

      url: Joi.string(),

      position: Joi.string(),
    });
  }

  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(this.CreateTagSchema()),
    });
  }

  static APIError() {
    return Joi.object({
      message: Joi.string(),

      status: Joi.number(),

      code: Joi.string(),

      exception: Joi.string(),

      info: Joi.string(),

      requestId: Joi.string(),

      stackTrace: Joi.string(),

      meta: Joi.object(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      id: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),

      id: Joi.string(),
    });
  }

  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string(),

      title: Joi.string(),
    });
  }

  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),

      children: this.ChildrenSchema(),

      id: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string(),

      application: Joi.string(),

      v: Joi.number(),

      id: Joi.string(),

      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static FAQ() {
    return Joi.object({
      slug: Joi.string(),

      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: this.FaqSchema(),
    });
  }

  static CreateFaqSchema() {
    return Joi.object({
      faq: this.FAQ(),
    });
  }

  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(Joi.object()),
    });
  }

  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: this.CategoryRequestSchema(),
    });
  }

  static CreateFaqCategorySchema() {
    return Joi.object({
      category: this.CategorySchema(),
    });
  }

  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(this.CategorySchema()),
    });
  }

  static GetFaqCategoryByIdOrSlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static Pagination() {
    return Joi.object({
      type: Joi.string(),

      current: Joi.number(),

      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),
    });
  }

  static LandingPageRequest() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),
    });
  }

  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),
    });
  }

  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string()),

      landscape: Joi.array().items(Joi.string()),
    });
  }

  static NavigationSchema() {
    return Joi.object({
      id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      orientation: Joi.any(),

      navigation: this.NavigationReference(),
    });
  }

  static NavigationRequest() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      orientation: this.Orientation(),

      navigation: this.NavigationReference(),
    });
  }

  static CustomPageSchema() {
    return Joi.object({
      id: Joi.string(),

      platform: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      type: Joi.string(),

      orientation: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      published: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.ContentSchema()),

      createdBy: this.CreatedBy(),

      dateMeta: this.DateMeta(),

      schedule: this.ScheduleSchema(),
    });
  }

  static ContentSchema() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static CustomPage() {
    return Joi.object({
      data: this.CustomPageSchema(),
    });
  }

  static CustomBlogSchema() {
    return Joi.object({
      id: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      readingTime: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      featureImage: this.FeatureImage(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: this.ContentSchema(),

      author: this.Author(),

      schedule: this.ScheduleSchema(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      customJson: Joi.object(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secureUrl: Joi.string(),
    });
  }

  static CustomBlog() {
    return Joi.object({
      data: this.CustomBlogSchema(),
    });
  }

  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.object()),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      pageType: Joi.string(),

      displayName: Joi.string(),

      params: Joi.array().items(Joi.string()),

      query: Joi.array().items(Joi.string()),
    });
  }

  static PageSchema() {
    return Joi.object({
      id: Joi.array().items(Joi.any()),

      schedule: Joi.string(),

      application: Joi.array().items(Joi.any()),

      componentIds: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.PageContent()),

      createdBy: Joi.object(),

      dateMeta: Joi.object(),

      description: Joi.string(),

      featureImage: Joi.object(),

      pageMeta: Joi.array().items(this.PageMeta()),

      platform: Joi.string(),

      published: Joi.boolean(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      type: Joi.string(),

      visibility: Joi.object(),
    });
  }

  static CreatedBy() {
    return Joi.object({
      id: Joi.string(),
    });
  }

  static PageContent() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.object(),
    });
  }

  static PageMeta() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.object(),
    });
  }

  static PageRequest() {
    return Joi.object({
      schedule: Joi.string(),

      application: Joi.string(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      featureImage: Joi.object(),

      published: Joi.boolean(),

      readingTime: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),
    });
  }

  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  static PageMetaSchema() {
    return Joi.object({
      systemPages: Joi.array().items(Joi.object()),

      customPages: Joi.array().items(Joi.object()),

      applicationId: Joi.string(),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Pagination(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      id: Joi.string(),

      slug: Joi.string(),

      dateMeta: this.DateMeta(),

      application: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.Media(),

      active: Joi.boolean(),

      archived: Joi.boolean(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.Media(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      id: Joi.string(),

      configType: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      contact: this.ContactSchema(),
    });
  }

  static Phone() {
    return Joi.object({
      key: Joi.string(),

      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.Phone()),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.Email()),
    });
  }

  static ContactSchema() {
    return Joi.object({
      phone: this.PhoneSchema(),

      email: this.EmailSchema(),
    });
  }

  static TagsSchema() {
    return Joi.object({
      application: Joi.string(),

      id: Joi.string(),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      subType: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),
    });
  }

  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.object()),

      excludedFields: Joi.array().items(Joi.string()),

      displayFields: Joi.array().items(Joi.string()),

      appId: Joi.string(),

      created: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string(),

      success: Joi.boolean(),

      code: Joi.string(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      isActive: Joi.boolean(),

      key: Joi.string(),

      configType: Joi.string(),

      merchantSalt: Joi.string(),

      secret: Joi.string(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      isActive: Joi.boolean(),

      aggregatorName: this.PaymentGatewayConfig(),

      appId: Joi.string(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string()),

      success: Joi.boolean(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string(),

      code: Joi.string(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: this.ErrorCodeAndDescription(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string(),

      small: Joi.string(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      cardType: Joi.string(),

      expired: Joi.boolean(),

      cardId: Joi.string(),

      name: Joi.string(),

      expYear: Joi.number(),

      code: Joi.string(),

      cardReference: Joi.string(),

      intentAppErrorList: Joi.array().items(Joi.string()),

      retryCount: Joi.number(),

      cardBrand: Joi.string(),

      cardBrandImage: Joi.string(),

      cardNumber: Joi.string(),

      displayName: Joi.string(),

      cardIssuer: Joi.string(),

      nickname: Joi.string(),

      cardToken: Joi.string(),

      timeout: Joi.number(),

      logoUrl: this.PaymentModeLogo(),

      aggregatorName: Joi.string(),

      cardName: Joi.string(),

      expMonth: Joi.number(),

      cardIsin: Joi.string(),

      merchantCode: Joi.string(),

      displayPriority: Joi.number(),

      intentFlow: Joi.string(),

      fyndVpa: Joi.string(),

      cardFingerprint: Joi.string(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymousEnable: Joi.boolean(),

      aggregatorName: Joi.string(),

      list: Joi.array().items(this.PaymentModeList()),

      displayPriority: Joi.number(),

      displayName: Joi.string(),

      name: Joi.string(),

      addCardEnabled: Joi.boolean(),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      paymentOption: Joi.array().items(this.RootPaymentMode()),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      paymentOptions: this.PaymentOptions(),

      success: Joi.boolean(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      isActive: Joi.boolean(),

      uniqueTransferNo: Joi.object(),

      transferType: Joi.string(),

      moreAttributes: Joi.object(),

      customers: Joi.object(),

      payoutsAggregators: Joi.array().items(Joi.object()),

      isDefault: Joi.boolean(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string(),

      isActive: Joi.boolean(),

      bankDetails: Joi.object(),

      users: Joi.object(),

      transferType: Joi.string(),

      uniqueExternalId: Joi.string(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string(),

      isActive: Joi.boolean(),

      paymentStatus: Joi.string(),

      bankDetails: Joi.object(),

      uniqueTransferNo: Joi.string(),

      users: Joi.object(),

      transferType: Joi.string(),

      payouts: Joi.object(),

      created: Joi.boolean(),

      success: Joi.boolean(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      isActive: Joi.boolean(),

      success: Joi.boolean(),

      isDefault: Joi.boolean(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      uniqueExternalId: Joi.string(),

      isActive: Joi.boolean(),

      isDefault: Joi.boolean(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.object()),

      success: Joi.boolean(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      aggregator: Joi.string(),

      config: Joi.object(),

      success: Joi.boolean(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      uniqueExternalId: Joi.string(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.object(),

      success: Joi.boolean(),
    });
  }

  static GetActivityStatus() {
    return Joi.object({
      activityHistory: this.ActivityHistory(),
    });
  }

  static ActivityHistory() {
    return Joi.object({
      createdat: Joi.string(),

      message: Joi.string(),

      type: Joi.string(),

      user: Joi.string(),
    });
  }

  static FailedOrders() {
    return Joi.object({
      orders: this.FailOrder(),
    });
  }

  static FailOrder() {
    return Joi.object({
      updatedAt: Joi.string(),

      id: Joi.string(),

      reason: Joi.string(),

      marketplaceOrder: this.MarketplaceOrder(),

      marketplaceOrderId: Joi.string(),

      createdAt: Joi.string(),

      appId: Joi.string(),

      marketplace: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static MarketplaceOrder() {
    return Joi.object({
      orderStatusUrl: Joi.string(),

      adminGraphqlApiId: Joi.string(),

      email: Joi.string(),

      test: Joi.boolean(),

      note: Joi.string(),

      totalPrice: Joi.string(),

      appId: Joi.number(),

      totalDiscountsSet: this.TotalDiscountsSet(),

      totalPriceSet: this.TotalPriceSet(),

      totalTaxSet: this.TotalTaxSet(),

      gateway: Joi.string(),

      name: Joi.string(),

      subtotalPriceSet: this.SubtotalPriceSet(),

      number: Joi.number(),

      buyerAcceptsMarketing: Joi.boolean(),

      contactEmail: Joi.string(),

      token: Joi.string(),

      sourceName: Joi.string(),

      paymentGatewayNames: Joi.array().items(Joi.any()),

      presentmentCurrency: Joi.string(),

      subtotalPrice: Joi.string(),

      processedAt: Joi.string(),

      orderNumber: Joi.number(),

      totalTipReceived: Joi.string(),

      id: Joi.number(),

      confirmed: Joi.boolean(),

      currency: Joi.string(),

      totalLineItemsPrice: Joi.string(),

      lineItems: this.LineItems(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      totalWeight: Joi.number(),

      billingAddress: this.BillingAddress(),

      totalShippingPriceSet: this.TotalShippingPriceSet(),

      customer: this.Customer(),

      totalDiscounts: Joi.string(),

      totalLineItemsPriceSet: this.TotalLineItemsPriceSet(),

      tags: Joi.string(),

      totalPriceUsd: Joi.string(),

      userId: Joi.number(),

      totalTax: Joi.string(),

      processingMethod: Joi.string(),

      shippingAddress: this.ShippingAddress(),

      taxesIncluded: Joi.boolean(),

      financialStatus: Joi.string(),
    });
  }

  static TotalDiscountsSet() {
    return Joi.object({
      presentmentMoney: this.PresentmentMoney(),

      shopMoney: this.ShopMoney(),
    });
  }

  static PresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static ShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalPriceSet() {
    return Joi.object({
      shopMoney: this.TotalPriceSetShopMoney(),

      presentmentMoney: this.TotalPriceSetPresentmentMoney(),
    });
  }

  static TotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalTaxSet() {
    return Joi.object({
      shopMoney: this.TotalTaxSetShopMoney(),

      presentmentMoney: this.TotalTaxSetPresentmentMoney(),
    });
  }

  static TotalTaxSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalTaxSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static SubtotalPriceSet() {
    return Joi.object({
      shopMoney: this.SubtotalPriceSetShopMoney(),

      presentmentMoney: this.SubtotalPriceSetPresentmentMoney(),
    });
  }

  static SubtotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static SubtotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static LineItems() {
    return Joi.object({
      sku: Joi.string(),

      fulfillableQuantity: Joi.number(),

      grams: Joi.number(),

      totalDiscount: Joi.string(),

      article: this.LineItemsArticle(),

      title: Joi.string(),

      variantInventoryManagement: Joi.string(),

      id: Joi.number(),

      variantId: Joi.number(),

      variantTitle: Joi.string(),

      productExists: Joi.boolean(),

      price: Joi.string(),

      adminGraphqlApiId: Joi.string(),

      quantity: Joi.number(),

      vendor: Joi.string(),

      fulfillmentService: Joi.string(),

      taxable: Joi.boolean(),

      name: Joi.string(),

      productId: Joi.number(),

      priceSet: this.PriceSet(),

      taxLines: this.TaxLines(),

      requiresShipping: Joi.boolean(),

      giftCard: Joi.boolean(),

      totalDiscountSet: this.TotalDiscountSet(),
    });
  }

  static LineItemsArticle() {
    return Joi.object({
      quantities: this.Quantities(),

      oldArticleUid: Joi.string(),

      totalQuantity: Joi.number(),

      manufacturer: this.Manufacturer(),

      price: this.ArticlePrice(),

      trackInventory: Joi.boolean(),

      company: this.Company(),

      isActive: Joi.boolean(),

      dateMeta: this.FailOrderDateMeta(),

      fragile: Joi.boolean(),

      marketplaceIdentifiers: this.MarketplaceIdentifiers(),

      size: Joi.string(),

      isSet: Joi.boolean(),

      dimension: this.Dimension(),

      weight: this.Weight(),

      store: this.Store(),

      meta: this.ArticleMeta(),

      uid: Joi.string(),

      brand: this.ArticleBrand(),

      itemId: Joi.number(),

      fyndArticleCode: Joi.string(),

      id: Joi.string(),

      identifier: this.LineItemsArticleIdentifier(),

      sellerIdentifier: Joi.string(),

      fyndItemCode: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  }

  static Quantities() {
    return Joi.object({
      notAvailable: this.NotAvailable(),

      sellable: this.Sellable(),

      orderCommitted: this.OrderCommitted(),

      damaged: this.Damaged(),
    });
  }

  static NotAvailable() {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  }

  static Sellable() {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  }

  static OrderCommitted() {
    return Joi.object({
      count: Joi.number(),

      updatedAt: Joi.string(),
    });
  }

  static Damaged() {
    return Joi.object({
      updatedAt: Joi.string(),

      count: Joi.number(),
    });
  }

  static Manufacturer() {
    return Joi.object({
      isDefault: Joi.boolean(),

      address: Joi.string(),

      name: Joi.string(),
    });
  }

  static ArticlePrice() {
    return Joi.object({
      marked: Joi.number(),

      currency: Joi.string(),

      effective: Joi.number(),

      transfer: Joi.number(),
    });
  }

  static Company() {
    return Joi.object({
      id: Joi.number(),

      companyType: Joi.string(),

      businessType: Joi.string(),

      companyName: Joi.string(),

      createdOn: Joi.string(),

      panNo: Joi.string(),

      returnAllowed: Joi.boolean(),

      meta: Joi.string(),

      exchangeAllowed: Joi.boolean(),

      agreementStartDate: Joi.string(),

      exchangeWithinDays: Joi.number(),

      paymentProcesingCharge: Joi.number(),

      fyndAFitAvailable: Joi.boolean(),

      modifiedOn: Joi.string(),

      returnWithinDays: Joi.number(),
    });
  }

  static FailOrderDateMeta() {
    return Joi.object({
      addedOnStore: Joi.string(),

      inventoryUpdatedOn: Joi.string(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static MarketplaceIdentifiers() {
    return Joi.object({
      tatacliqLuxury: this.TatacliqLuxury(),
    });
  }

  static TatacliqLuxury() {
    return Joi.object({
      sku: Joi.string(),
    });
  }

  static Dimension() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string(),

      length: Joi.number(),

      isDefault: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      isDefault: Joi.boolean(),

      unit: Joi.string(),

      shipping: Joi.number(),
    });
  }

  static Store() {
    return Joi.object({
      id: Joi.number(),
    });
  }

  static ArticleMeta() {
    return Joi.object({
      service: Joi.string(),
    });
  }

  static ArticleBrand() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),
    });
  }

  static LineItemsArticleIdentifier() {
    return Joi.object({
      skuCode: Joi.string(),
    });
  }

  static PriceSet() {
    return Joi.object({
      shopMoney: this.PriceSetShopMoney(),

      presentmentMoney: this.PriceSetPresentmentMoney(),
    });
  }

  static PriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static PriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TaxLines() {
    return Joi.object({
      title: Joi.string(),

      price: Joi.string(),

      rate: Joi.number(),

      priceSet: this.TaxLinesPriceSet(),
    });
  }

  static TaxLinesPriceSet() {
    return Joi.object({
      shopMoney: this.TaxLinesPriceSetShopMoney(),

      presentmentMoney: this.TaxLinesPriceSetPresentmentMoney(),
    });
  }

  static TaxLinesPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TaxLinesPriceSetPresentmentMoney() {
    return Joi.object({
      currencyCode: Joi.string(),

      amount: Joi.string(),
    });
  }

  static TotalDiscountSet() {
    return Joi.object({
      presentmentMoney: this.TotalDiscountSetPresentmentMoney(),

      shopMoney: this.TotalDiscountSetShopMoney(),
    });
  }

  static TotalDiscountSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalDiscountSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static BillingAddress() {
    return Joi.object({
      address1: Joi.string(),

      city: Joi.string(),

      zip: Joi.string(),

      lastName: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      provinceCode: Joi.string(),

      phone: Joi.string(),

      company: Joi.string(),

      latitude: Joi.number(),

      name: Joi.string(),

      country: Joi.string(),

      countryCode: Joi.string(),

      firstName: Joi.string(),

      province: Joi.string(),
    });
  }

  static TotalShippingPriceSet() {
    return Joi.object({
      shopMoney: this.TotalShippingPriceSetShopMoney(),

      presentmentMoney: this.TotalShippingPriceSetPresentmentMoney(),
    });
  }

  static TotalShippingPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalShippingPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static Customer() {
    return Joi.object({
      createdAt: Joi.string(),

      id: Joi.number(),

      lastName: Joi.string(),

      state: Joi.string(),

      lastOrderId: Joi.number(),

      note: Joi.string(),

      verifiedEmail: Joi.boolean(),

      phone: Joi.string(),

      acceptsMarketing: Joi.boolean(),

      firstName: Joi.string(),

      tags: Joi.string(),

      lastOrderName: Joi.string(),

      ordersCount: Joi.number(),

      totalSpent: Joi.string(),

      taxExempt: Joi.boolean(),

      currency: Joi.string(),

      acceptsMarketingUpdatedAt: Joi.string(),

      email: Joi.string(),

      updatedAt: Joi.string(),

      adminGraphqlApiId: Joi.string(),

      defaultAddress: this.DefaultAddress(),
    });
  }

  static DefaultAddress() {
    return Joi.object({
      lastName: Joi.string(),

      name: Joi.string(),

      provinceCode: Joi.string(),

      countryCode: Joi.string(),

      isDefault: Joi.boolean(),

      id: Joi.number(),

      customerId: Joi.number(),

      firstName: Joi.string(),

      address1: Joi.string(),

      phone: Joi.string(),

      countryName: Joi.string(),

      company: Joi.string(),

      address2: Joi.string(),

      city: Joi.string(),

      province: Joi.string(),

      country: Joi.string(),

      zip: Joi.string(),
    });
  }

  static TotalLineItemsPriceSet() {
    return Joi.object({
      shopMoney: this.TotalLineItemsPriceSetShopMoney(),

      presentmentMoney: this.TotalLineItemsPriceSetPresentmentMoney(),
    });
  }

  static TotalLineItemsPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static TotalLineItemsPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currencyCode: Joi.string(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address1: Joi.string(),

      zip: Joi.string(),

      address2: Joi.string(),

      countryCode: Joi.string(),

      country: Joi.string(),

      lastName: Joi.string(),

      latitude: Joi.number(),

      provinceCode: Joi.string(),

      firstName: Joi.string(),

      phone: Joi.string(),

      province: Joi.string(),

      longitude: Joi.number(),

      city: Joi.string(),

      company: Joi.string(),

      name: Joi.string(),
    });
  }

  static OrderListing() {
    return Joi.object({
      items: Joi.array().items(this.OrderItems()),

      filters: this.Filters(),

      nextOrderStatus: this.NextOrderStatus(),

      page: this.PlatformOrderPage(),

      appliedFilters: this.AppliedFilters(),
    });
  }

  static OrderItems() {
    return Joi.object({
      user: this.PlatformOrderUserInfo(),

      deliveryAddress: this.PlatformDeliveryAddress(),

      channel: this.Channel(),

      breakupValues: this.PlatformBreakupValues(),

      id: Joi.string(),

      application: this.PlatformApplication(),

      shipments: this.PlatformShipment(),

      createdAt: Joi.string(),

      totalShipmentsInOrder: Joi.number(),

      payments: this.ItemsPayments(),
    });
  }

  static PlatformOrderUserInfo() {
    return Joi.object({
      mobile: Joi.string(),

      firstName: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      lastName: Joi.string(),

      isAnonymousUser: Joi.boolean(),

      uid: Joi.number(),

      avisUserId: Joi.string(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string(),

      state: Joi.string(),

      country: Joi.string(),

      version: Joi.string(),

      address1: Joi.string(),

      latitude: Joi.number(),

      updatedAt: Joi.string(),

      city: Joi.string(),

      landmark: Joi.string(),

      createdAt: Joi.string(),

      name: Joi.string(),

      address: Joi.string(),

      phone: Joi.string(),

      longitude: Joi.number(),

      addressType: Joi.string(),

      email: Joi.string(),

      pincode: Joi.string(),

      address2: Joi.string(),

      contactPerson: Joi.string(),

      addressCategory: Joi.string(),
    });
  }

  static Channel() {
    return Joi.object({
      name: Joi.string(),

      logo: Joi.string(),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.number(),

      name: Joi.string(),
    });
  }

  static PlatformApplication() {
    return Joi.object({
      name: Joi.string(),

      owner: Joi.string(),

      postOrderReassignment: Joi.boolean(),

      id: Joi.string(),

      description: Joi.string(),

      dpAssignment: Joi.boolean(),

      articleAssignment: this.ArticleAssignment(),

      forceReassignment: Joi.boolean(),

      token: Joi.string(),

      secret: Joi.string(),
    });
  }

  static ArticleAssignment() {
    return Joi.object({
      strategy: Joi.string(),

      level: Joi.string(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      status: this.PlatformShipmentStatus(),

      bags: this.Bags(),

      prices: this.ShipmentPrices(),

      breakupValues: this.ShipmentBreakupValues(),

      id: Joi.string(),

      dpDetails: this.DpDetails(),

      invoice: this.ShipmentInvoice(),

      fulfillingStore: this.PlatformFulfillingStore(),

      payments: this.Payments(),

      gst: this.ShipmentGst(),

      company: this.Company(),

      brand: this.PlatformShipmentBrand(),

      coupon: Joi.object(),

      orderSource: Joi.string(),

      isNotFyndSource: Joi.boolean(),

      comment: Joi.string(),

      promise: this.Promise(),

      trackingDetails: this.ShipmentTrackingDetails(),

      isFyndCoupon: Joi.boolean(),

      orderType: Joi.string(),

      user: this.ShipmentUser(),
    });
  }

  static PlatformShipmentStatus() {
    return Joi.object({
      id: Joi.number(),

      bagList: Joi.array().items(Joi.number()),

      createdAt: Joi.string(),

      status: Joi.string(),

      name: Joi.string(),

      progress: Joi.number(),

      shipmentId: Joi.string(),

      currentShipmentStatus: Joi.string(),

      colorCode: Joi.string(),
    });
  }

  static Bags() {
    return Joi.object({
      financialBreakup: Joi.array().items(this.BagFinancialBreakup()),

      status: this.BagCurrStatus(),

      item: this.BagItem(),

      article: this.BagArticle(),

      id: Joi.number(),

      prices: this.BagPrices(),

      gstDetails: this.GstDetails(),

      breakupValues: this.BagBreakupValues(),

      updateTime: Joi.number(),

      currentStatus: this.BagCurrentStatus(),

      bagStatus: this.BagStatus(),
    });
  }

  static BagFinancialBreakup() {
    return Joi.object({
      valueOfGood: Joi.number(),

      hsnCode: Joi.string(),

      priceEffective: Joi.number(),

      codCharges: Joi.number(),

      gstFee: Joi.string(),

      fyndCredits: Joi.number(),

      refundAmount: Joi.number(),

      cashbackApplied: Joi.number(),

      transferPrice: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      couponValue: Joi.number(),

      amountPaid: Joi.number(),

      gstTaxPercentage: Joi.number(),

      size: Joi.string(),

      totalUnits: Joi.number(),

      discount: Joi.number(),

      couponEffectiveDiscount: Joi.number(),

      cashback: Joi.number(),

      promotionEffectiveDiscount: Joi.number(),

      gstTag: Joi.string(),

      deliveryCharge: Joi.number(),

      refundCredit: Joi.number(),

      priceMarked: Joi.number(),

      identifiers: this.Identifiers(),

      itemName: Joi.string(),

      addedToFyndCash: Joi.boolean(),

      brandCalculatedAmount: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string(),
    });
  }

  static BagCurrStatus() {
    return Joi.object({
      enableTracking: Joi.boolean(),

      isCustomerReturnAllowed: Joi.boolean(),

      isActive: Joi.boolean(),

      isReturnable: Joi.boolean(),

      canBeCancelled: Joi.boolean(),
    });
  }

  static BagItem() {
    return Joi.object({
      id: Joi.number(),

      size: Joi.string(),

      slugKey: Joi.string(),

      canReturn: Joi.boolean(),

      brandId: Joi.number(),

      l2Category: Joi.array().items(Joi.string()),

      name: Joi.string(),

      code: Joi.string(),

      canCancel: Joi.boolean(),

      attributes: this.BagItemAttributes(),

      l3CategoryName: Joi.string(),

      l3Category: Joi.number(),

      l1Category: Joi.array().items(Joi.string()),

      image: Joi.array().items(Joi.string()),

      brand: Joi.string(),

      lastUpdatedAt: Joi.string(),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      itemCode: Joi.string(),

      brandName: Joi.string(),

      countryOfOrigin: Joi.string(),
    });
  }

  static BagArticle() {
    return Joi.object({
      identifiers: this.ArticleIdentifiers(),

      espModified: Joi.boolean(),

      isSet: Joi.boolean(),

      size: Joi.string(),

      code: Joi.string(),

      set: this.Set(),

      sellerIdentifier: Joi.string(),

      returnConfig: this.BagArticleReturnConfig(),

      id: Joi.string(),

      uid: Joi.string(),

      childDetails: Joi.object(),
    });
  }

  static ArticleIdentifiers() {
    return Joi.object({
      ean: Joi.string(),
    });
  }

  static Set() {
    return Joi.object({
      quantity: Joi.number(),

      sizeDistribution: this.SetSizeDistribution(),
    });
  }

  static SetSizeDistribution() {
    return Joi.object({
      sizes: this.Sizes(),
    });
  }

  static Sizes() {
    return Joi.object({
      size: Joi.string(),

      pieces: Joi.number(),
    });
  }

  static BagArticleReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string(),

      returnable: Joi.boolean(),
    });
  }

  static ShipmentPrices() {
    return Joi.object({
      refundAmount: Joi.number(),

      cashbackApplied: Joi.number(),

      transferPrice: Joi.number(),

      couponValue: Joi.number(),

      amountPaid: Joi.number(),

      deliveryCharge: Joi.number(),

      couponEffectiveDiscount: Joi.number(),

      codCharges: Joi.number(),

      refundCredit: Joi.number(),

      addedToFyndCash: Joi.boolean(),

      gstTaxPercentage: Joi.number(),

      priceMarked: Joi.number(),

      priceEffective: Joi.number(),

      discount: Joi.number(),

      promotionEffectiveDiscount: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      fyndCredits: Joi.number(),

      brandCalculatedAmount: Joi.number(),

      cashback: Joi.number(),

      valueOfGood: Joi.number(),
    });
  }

  static GstDetails() {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      gstFee: Joi.string(),

      gstTag: Joi.string(),

      hsnCode: Joi.string(),

      valueOfGood: Joi.number(),

      gstTaxPercentage: Joi.number(),

      isDefaultHsnCode: Joi.boolean(),
    });
  }

  static BagBreakupValues() {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  }

  static BagCurrentStatus() {
    return Joi.object({
      updatedAt: Joi.string(),

      bagStateMapper: this.BagStateMapper(),

      status: Joi.string(),

      stateType: Joi.string(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      appStateName: Joi.string(),

      isActive: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),
    });
  }

  static BagStatus() {
    return Joi.object({
      status: Joi.string(),

      stateType: Joi.string(),

      updatedAt: Joi.string(),

      bagStateMapper: this.BagStatusBagStateMapper(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      isActive: Joi.boolean(),

      displayName: Joi.string(),

      name: Joi.string(),

      appDisplayName: Joi.string(),

      appStateName: Joi.string(),
    });
  }

  static BagPrices() {
    return Joi.object({
      cashback: Joi.number(),

      refundCredit: Joi.number(),

      couponValue: Joi.number(),

      deliveryCharge: Joi.number(),

      fyndCredits: Joi.number(),

      priceMarked: Joi.number(),

      cashbackApplied: Joi.number(),

      valueOfGood: Joi.number(),

      amountPaidRoundoff: Joi.number(),

      amountPaid: Joi.number(),

      codCharges: Joi.number(),

      priceEffective: Joi.number(),

      refundAmount: Joi.number(),

      discount: Joi.number(),
    });
  }

  static ShipmentBreakupValues() {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      value: Joi.number(),
    });
  }

  static DpDetails() {
    return Joi.object({
      gstTag: Joi.string(),
    });
  }

  static ShipmentInvoice() {
    return Joi.object({
      paymentType: Joi.string(),

      updatedDate: Joi.string(),

      invoiceUrl: Joi.string(),

      labelUrl: Joi.string(),

      paymentMode: Joi.string(),

      amountToCollect: Joi.number(),

      rtoAddress: this.RtoAddress(),
    });
  }

  static RtoAddress() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),

      phone: Joi.string(),

      locationType: Joi.string(),

      storeAddressJson: this.StoreAddressJson(),

      code: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      companyId: Joi.number(),

      contactPerson: Joi.string(),

      state: Joi.string(),

      storeEmail: Joi.string(),

      address2: Joi.string(),
    });
  }

  static StoreAddressJson() {
    return Joi.object({
      country: Joi.string(),

      latitude: Joi.number(),

      updatedAt: Joi.string(),

      area: Joi.string(),

      state: Joi.string(),

      addressType: Joi.string(),

      city: Joi.string(),

      pincode: Joi.string(),

      address1: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      email: Joi.string(),

      phone: Joi.string(),

      createdAt: Joi.string(),

      contactPerson: Joi.string(),

      addressCategory: Joi.string(),

      version: Joi.string(),

      landmark: Joi.string(),
    });
  }

  static PlatformFulfillingStore() {
    return Joi.object({
      packagingMaterialCount: Joi.number(),

      locationType: Joi.string(),

      code: Joi.string(),

      city: Joi.string(),

      meta: this.FulfillingStoreMeta(),

      name: Joi.string(),

      isActive: Joi.boolean(),

      address1: Joi.string(),

      storeEmail: Joi.string(),

      isArchived: Joi.boolean(),

      state: Joi.string(),

      address2: Joi.string(),

      contactPerson: Joi.string(),

      phone: Joi.string(),

      isEnabledForRecon: Joi.boolean(),

      fulfillmentChannel: Joi.string(),

      createdAt: Joi.string(),

      id: Joi.number(),

      pincode: Joi.string(),

      brandStoreTags: Joi.array().items(Joi.string()),

      companyId: Joi.number(),

      storeAddressJson: this.FulfillingStoreStoreAddressJson(),

      updatedAt: Joi.string(),

      loginUsername: Joi.string(),

      country: Joi.string(),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additionalContactDetails: this.AdditionalContactDetails(),

      documents: this.Documents(),

      gstNumber: Joi.string(),

      displayName: Joi.string(),

      productReturnConfig: this.ProductReturnConfig(),

      allowDpAssignmentFromFynd: Joi.boolean(),

      stage: Joi.string(),

      timing: this.Timing(),
    });
  }

  static AdditionalContactDetails() {
    return Joi.object({
      number: Joi.array().items(Joi.string()),
    });
  }

  static Documents() {
    return Joi.object({
      gst: this.Gst(),
    });
  }

  static Gst() {
    return Joi.object({
      legalName: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      verified: Joi.boolean(),
    });
  }

  static ProductReturnConfig() {
    return Joi.object({
      onSameStore: Joi.boolean(),
    });
  }

  static Timing() {
    return Joi.object({
      opening: this.Opening(),

      weekday: Joi.string(),

      open: Joi.boolean(),

      closing: this.Closing(),
    });
  }

  static Opening() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static Closing() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static FulfillingStoreStoreAddressJson() {
    return Joi.object({
      address2: Joi.string(),

      area: Joi.string(),

      email: Joi.string(),

      phone: Joi.string(),

      state: Joi.string(),

      contactPerson: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      version: Joi.string(),

      createdAt: Joi.string(),

      addressType: Joi.string(),

      city: Joi.string(),

      address1: Joi.string(),

      landmark: Joi.string(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      updatedAt: Joi.string(),

      addressCategory: Joi.string(),
    });
  }

  static Payments() {
    return Joi.object({
      isActive: Joi.boolean(),

      displayName: Joi.string(),

      logo: Joi.string(),

      source: Joi.string(),

      sourceNickname: Joi.string(),

      displayPriority: Joi.number(),

      id: Joi.number(),

      mode: Joi.string(),

      paymentIdentifier: Joi.string(),
    });
  }

  static ShipmentGst() {
    return Joi.object({
      brandCalculatedAmount: Joi.number(),

      valueOfGood: Joi.number(),

      gstFee: Joi.number(),
    });
  }

  static PlatformShipmentBrand() {
    return Joi.object({
      creditNoteAllowed: Joi.boolean(),

      brandName: Joi.string(),

      modifiedOn: Joi.string(),

      id: Joi.number(),

      isVirtualInvoice: Joi.boolean(),

      createdOn: Joi.string(),

      logo: Joi.string(),
    });
  }

  static Promise() {
    return Joi.object({
      timestamp: this.Timestamp(),
    });
  }

  static Timestamp() {
    return Joi.object({
      min: Joi.string(),

      max: Joi.string(),
    });
  }

  static ShipmentTrackingDetails() {
    return Joi.object({
      status: Joi.string(),

      time: Joi.string(),

      isPassed: Joi.boolean(),

      isCurrent: Joi.boolean(),
    });
  }

  static ShipmentUser() {
    return Joi.object({
      email: Joi.string(),

      id: Joi.number(),

      firstName: Joi.string(),

      mobile: Joi.string(),

      gender: Joi.string(),

      lastName: Joi.string(),

      isAnonymousUser: Joi.boolean(),

      mongoUserId: Joi.string(),
    });
  }

  static ItemsPayments() {
    return Joi.object({
      displayPriority: Joi.number(),

      id: Joi.number(),

      isActive: Joi.boolean(),

      displayName: Joi.string(),

      logo: Joi.string(),

      paymentIdentifier: Joi.string(),

      sourceNickname: Joi.string(),

      mode: Joi.string(),

      source: Joi.string(),
    });
  }

  static Filters() {
    return Joi.object({
      stages: this.Stages(),
    });
  }

  static Stages() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),

      isDefault: Joi.boolean(),

      filters: this.StagesFilters(),
    });
  }

  static StagesFilters() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),

      type: Joi.string(),

      options: this.Options(),
    });
  }

  static Options() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static NextOrderStatus() {
    return Joi.object({
      bagConfirmed: this.BagConfirmed(),

      dpAssigned: this.DpAssigned(),

      returnBagDelivered: this.ReturnBagDelivered(),

      placed: this.Placed(),

      deliveryDone: this.DeliveryDone(),

      pending: this.Pending(),

      bagPacked: this.BagPacked(),
    });
  }

  static BagConfirmed() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static DpAssigned() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static ReturnBagDelivered() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static Placed() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static DeliveryDone() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static Pending() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static BagPacked() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.string(),
    });
  }

  static PlatformOrderPage() {
    return Joi.object({
      next: Joi.string(),

      previous: Joi.string(),

      type: Joi.string(),

      size: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.boolean(),

      itemTotal: this.ItemTotal(),
    });
  }

  static ItemTotal() {
    return Joi.object({
      new: Joi.number(),

      processing: Joi.number(),

      returns: Joi.number(),

      all: Joi.number(),
    });
  }

  static AppliedFilters() {
    return Joi.object({
      stage: Joi.string(),

      stores: Joi.array().items(Joi.string()),

      fromDate: Joi.string(),

      toDate: Joi.string(),
    });
  }

  static UpdateOrderReprocessResponse() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static PlatformOrderTrack() {
    return Joi.object({
      success: Joi.boolean(),

      requestId: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      countryCode: Joi.string(),

      resendTimer: Joi.number(),

      resendToken: Joi.string(),
    });
  }

  static GetPingResponse() {
    return Joi.object({
      ping: Joi.string(),
    });
  }

  static UpdateShipmentStatusResponse() {
    return Joi.object({
      shipments: Joi.object(),

      errorShipments: Joi.array().items(any),
    });
  }

  static UpdateShipmentStatusBody() {
    return Joi.object({
      shipments: Joi.object(),

      forceTransition: Joi.boolean(),

      task: Joi.boolean(),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: this.Results(),
    });
  }

  static Results() {
    return Joi.object({
      awb: Joi.string(),

      updatedAt: Joi.string(),

      lastLocationRecievedAt: Joi.string(),

      reason: Joi.string(),

      shipmentType: Joi.string(),

      status: Joi.string(),

      updatedTime: Joi.string(),

      accountName: Joi.string(),
    });
  }

  static UpdateProcessShipmenstRequestBody() {
    return Joi.object({
      shipmentIds: Joi.array().items(Joi.string()),

      expectedStatus: Joi.string(),
    });
  }

  static UpdateProcessShipmenstRequestResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static GetVoiceCallbackResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static GetClickToCallResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      appId: Joi.string(),

      words: Joi.array().items(Joi.string()),

      result: Joi.object(),

      uid: Joi.string(),

      customJson: Joi.object(),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      items: this.GetSearchWordsData(),

      page: this.Page(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string(),

      errors: Joi.object(),

      message: Joi.string(),

      status: Joi.number(),

      meta: Joi.object(),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      query: Joi.object(),

      sortOn: Joi.string(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      appId: Joi.string(),

      words: Joi.array().items(Joi.string()),

      result: this.SearchKeywordResult(),

      isActive: Joi.boolean(),

      customJson: Joi.object(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetSearchWordsData()),

      page: this.Page(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      appId: Joi.string(),

      words: Joi.array().items(Joi.string()),

      results: Joi.array().items(Joi.object()),

      uid: Joi.string(),

      customJson: Joi.object(),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetAutocompleteWordsData()),

      page: this.Page(),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      query: Joi.object(),

      params: Joi.object(),

      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      page: this.AutocompletePageAction(),

      type: Joi.string(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      display: Joi.string(),

      action: this.AutocompleteAction(),

      customJson: Joi.object(),

      logo: this.Media(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      appId: Joi.string(),

      words: Joi.array().items(Joi.string()),

      results: Joi.array().items(this.AutocompleteResult()),

      isActive: Joi.boolean(),

      customJson: Joi.object(),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      appId: Joi.string(),

      words: Joi.array().items(Joi.string()),

      customJson: Joi.object(),

      results: Joi.array().items(Joi.object()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allowRemove: Joi.boolean(),

      autoSelect: Joi.boolean(),

      productUid: Joi.number(),

      autoAddToCart: Joi.boolean(),

      maxQuantity: Joi.number(),

      minQuantity: Joi.number(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      companyId: Joi.number(),

      logo: Joi.string(),

      choice: Joi.string(),

      slug: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()),

      isActive: Joi.boolean(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: Joi.object(),

      modifiedBy: Joi.object(),

      sameStoreAssignment: Joi.boolean(),

      name: Joi.string(),

      pageVisibility: Joi.array().items(Joi.string()),

      meta: Joi.object(),

      id: Joi.string(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetProductBundleCreateResponse()),

      page: this.Page(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      logo: Joi.string(),

      choice: Joi.string(),

      slug: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()),

      isActive: Joi.boolean(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: Joi.object(),

      modifiedBy: Joi.object(),

      sameStoreAssignment: Joi.boolean(),

      name: Joi.string(),

      pageVisibility: Joi.array().items(Joi.string()),

      meta: Joi.object(),
    });
  }

  static Size() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),

      quantity: Joi.number(),

      isAvailable: Joi.boolean(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      sizes: Joi.array().items(Joi.string()),

      countryOfOrigin: Joi.string(),

      images: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      attributes: Joi.object(),

      quantity: Joi.number(),

      identifier: Joi.object(),

      uid: Joi.number(),

      shortDescription: Joi.string(),

      itemCode: Joi.string(),

      name: Joi.string(),

      price: Joi.object(),
    });
  }

  static Price() {
    return Joi.object({
      maxMarked: Joi.number(),

      minEffective: Joi.number(),

      minMarked: Joi.number(),

      currency: Joi.string(),

      maxEffective: Joi.number(),
    });
  }

  static GetProducts() {
    return Joi.object({
      sizes: Joi.array().items(this.Size()),

      allowRemove: Joi.boolean(),

      autoSelect: Joi.boolean(),

      productUid: Joi.number(),

      minQuantity: Joi.number(),

      maxQuantity: Joi.number(),

      autoAddToCart: Joi.boolean(),

      productDetails: this.LimitedProductData(),

      price: this.Price(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      companyId: Joi.number(),

      products: Joi.array().items(this.GetProducts()),

      slug: Joi.string(),

      choice: Joi.string(),

      logo: Joi.string(),

      isActive: Joi.boolean(),

      sameStoreAssignment: Joi.boolean(),

      name: Joi.string(),

      pageVisibility: Joi.array().items(Joi.string()),

      meta: Joi.object(),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      logo: Joi.string(),

      choice: Joi.string(),

      slug: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()),

      isActive: Joi.boolean(),

      modifiedOn: Joi.string(),

      modifiedBy: Joi.object(),

      sameStoreAssignment: Joi.boolean(),

      name: Joi.string(),

      pageVisibility: Joi.array().items(Joi.string()),

      meta: Joi.object(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: Joi.object(),
    });
  }

  static Meta() {
    return Joi.object({
      headers: Joi.object(),

      unit: Joi.string(),

      values: Joi.array().items(Joi.object()),
    });
  }

  static Guide() {
    return Joi.object({
      meta: this.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      image: Joi.string(),

      companyId: Joi.number(),

      active: Joi.boolean(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),

      brandId: Joi.number(),

      createdBy: Joi.object(),

      modifiedBy: Joi.object(),

      title: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      subtitle: Joi.string(),

      tag: Joi.string(),

      guide: this.Guide(),

      id: Joi.string(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),

      uid: Joi.number(),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      companyId: Joi.number(),

      active: Joi.boolean(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),

      createdBy: Joi.object(),

      modifiedBy: Joi.object(),

      title: Joi.string(),

      name: Joi.string(),

      brandId: Joi.number(),

      subtitle: Joi.string(),

      tag: Joi.string(),

      guide: Joi.object(),

      id: Joi.string(),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingSortMetaResponse()),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),

      units: Joi.array().items(Joi.object()),

      filterTypes: Joi.array().items(Joi.string()),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingResponse() {
    return Joi.object({
      sort: this.MetaDataListingSortResponse(),

      filter: this.MetaDataListingFilterResponse(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      detail: Joi.object(),

      compare: Joi.object(),

      variant: Joi.object(),

      similar: Joi.object(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      listing: this.MetaDataListingResponse(),

      product: this.GetCatalogConfigurationDetailsProduct(),
    });
  }

  static ProductSize() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      key: Joi.string(),

      logo: Joi.string(),

      displayType: Joi.string(),

      isActive: Joi.boolean(),

      size: this.ProductSize(),

      priority: Joi.number(),

      name: Joi.string(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductVariantConfig()),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      key: Joi.string(),

      logo: Joi.string(),

      isActive: Joi.boolean(),

      size: this.ProductSize(),

      priority: Joi.number(),

      title: Joi.string(),

      subtitle: Joi.string(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      variant: this.ConfigurationProductVariant(),

      similar: this.ConfigurationProductSimilar(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      key: Joi.string(),

      logo: Joi.string(),

      isActive: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationListingSortConfig()),

      defaultKey: Joi.string(),
    });
  }

  static ConfigurationBucketPoints() {
    return Joi.object({
      start: Joi.number(),

      end: Joi.number(),
    });
  }

  static ConfigurationListingFilterValue() {
    return Joi.object({
      bucketPoints: Joi.array().items(this.ConfigurationBucketPoints()),

      condition: Joi.string(),

      sort: Joi.string(),

      value: Joi.string(),

      map: Joi.object(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      key: Joi.string(),

      logo: Joi.string(),

      isActive: Joi.boolean(),

      priority: Joi.number(),

      name: Joi.string(),

      type: Joi.string(),

      valueConfig: this.ConfigurationListingFilterValue(),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      attributeConfig: Joi.array().items(
        this.ConfigurationListingFilterConfig()
      ),

      allowSingle: Joi.boolean(),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      sort: this.ConfigurationListingSort(),

      filter: this.ConfigurationListingFilter(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      appId: Joi.string(),

      product: this.ConfigurationProduct(),

      configId: Joi.string(),

      configType: Joi.string(),

      listing: this.ConfigurationListing(),

      id: Joi.string(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      isDefault: Joi.boolean(),

      data: this.AppCatalogConfiguration(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      appId: Joi.string(),

      product: this.ConfigurationProduct(),

      configId: Joi.string(),

      configType: Joi.string(),

      listing: this.ConfigurationListing(),
    });
  }

  static GetCatalogConfigurationDetailsSchemaListing() {
    return Joi.object({
      sort: Joi.object(),

      filter: Joi.object(),
    });
  }

  static EntityConfiguration() {
    return Joi.object({
      appId: Joi.string(),

      product: this.GetCatalogConfigurationDetailsProduct(),

      configId: Joi.string(),

      configType: Joi.string(),

      listing: this.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      isDefault: Joi.boolean(),

      data: this.EntityConfiguration(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      kind: Joi.string(),

      display: Joi.string(),

      logo: Joi.string(),

      name: Joi.string(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      count: Joi.number(),

      min: Joi.number(),

      selectedMax: Joi.number(),

      queryFormat: Joi.string(),

      displayFormat: Joi.string(),

      display: Joi.string(),

      isSelected: Joi.boolean(),

      value: Joi.string(),

      currencySymbol: Joi.string(),

      max: Joi.number(),

      currencyCode: Joi.string(),

      selectedMin: Joi.number(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      key: this.ProductFiltersKey(),

      values: Joi.array().items(this.ProductFiltersValue()),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      isSelected: Joi.boolean(),

      value: Joi.string(),

      name: Joi.string(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sortOn: Joi.array().items(this.ProductSortOn()),
    });
  }

  static BannerImage() {
    return Joi.object({
      url: Joi.string(),

      aspectRatio: Joi.string(),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: this.BannerImage(),

      landscape: this.BannerImage(),
    });
  }

  static Media1() {
    return Joi.object({
      url: Joi.string(),

      type: Joi.string(),

      meta: Joi.object(),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      query: Joi.object(),

      type: Joi.string(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      page: this.ProductListingActionPage(),

      type: Joi.string(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      appId: Joi.string(),

      cron: Joi.object(),

      isActive: Joi.boolean(),

      schedule: Joi.object(),

      allowFacets: Joi.boolean(),

      banners: this.ImageUrls(),

      tag: Joi.array().items(Joi.string()),

      query: Joi.object(),

      badge: Joi.object(),

      allowSort: Joi.boolean(),

      uid: Joi.string(),

      name: Joi.string(),

      logo: this.Media1(),

      slug: Joi.string(),

      action: this.ProductListingAction(),

      description: Joi.string(),

      type: Joi.string(),

      meta: Joi.object(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      isSelected: Joi.boolean(),

      display: Joi.string(),

      name: Joi.string(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      isSelected: Joi.boolean(),

      display: Joi.string(),

      name: Joi.string(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetCollectionDetailNest()),

      filters: this.CollectionListingFilter(),

      page: this.Page(),
    });
  }

  static Schedule() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      email: Joi.string(),

      uid: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      url: Joi.string(),

      aspectRatio: Joi.string(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: this.CollectionImage(),

      landscape: this.CollectionImage(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      text: Joi.string(),

      color: Joi.string(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      appId: Joi.string(),

      isActive: Joi.boolean(),

      schedule: this.Schedule(),

      allowFacets: Joi.boolean(),

      createdBy: this.UserInfo(),

      modifiedBy: this.UserInfo(),

      banners: this.CollectionBanner(),

      query: Joi.object(),

      badge: this.CollectionBadge(),

      published: Joi.boolean(),

      allowSort: Joi.boolean(),

      customJson: Joi.object(),

      name: Joi.string(),

      seo: this.SeoDetail(),

      slug: Joi.string(),

      logo: this.CollectionImage(),

      localeLanguage: Joi.object(),

      sortOn: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      description: Joi.string(),

      type: Joi.string(),

      meta: Joi.object(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      allowSort: Joi.boolean(),

      appId: Joi.string(),

      banners: this.ImageUrls(),

      logo: this.BannerImage(),

      slug: Joi.string(),

      cron: Joi.object(),

      isActive: Joi.boolean(),

      query: Joi.object(),

      schedule: Joi.object(),

      allowFacets: Joi.boolean(),

      badge: Joi.object(),

      name: Joi.string(),

      description: Joi.string(),

      type: Joi.string(),

      tag: Joi.array().items(Joi.string()),

      meta: Joi.object(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      allowSort: Joi.boolean(),

      appId: Joi.string(),

      banners: this.ImageUrls(),

      logo: this.Media1(),

      slug: Joi.string(),

      cron: Joi.object(),

      isActive: Joi.boolean(),

      query: Joi.object(),

      schedule: Joi.object(),

      allowFacets: Joi.boolean(),

      badge: Joi.object(),

      name: Joi.string(),

      description: Joi.string(),

      type: Joi.string(),

      tag: Joi.array().items(Joi.string()),

      meta: Joi.object(),

      visibleFacetsKeys: Joi.array().items(Joi.string()),
    });
  }

  static Price1() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),

      currencyCode: Joi.string(),

      currencySymbol: Joi.string(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      marked: this.Price1(),

      effective: this.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      imageNature: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      highlights: Joi.array().items(Joi.string()),

      promoMeta: Joi.object(),

      productOnlineDate: Joi.string(),

      teaserTag: Joi.object(),

      description: Joi.string(),

      hasVariant: Joi.boolean(),

      attributes: Joi.object(),

      discount: Joi.string(),

      sellable: Joi.boolean(),

      uid: Joi.number(),

      shortDescription: Joi.string(),

      ratingCount: Joi.number(),

      name: Joi.string(),

      price: this.ProductListingPrice(),

      similars: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      medias: Joi.array().items(this.Media1()),

      itemType: Joi.string(),

      color: Joi.string(),

      rating: Joi.number(),

      type: Joi.string(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      items: Joi.array().items(this.ProductListingDetail()),

      filters: Joi.array().items(this.ProductFilters()),

      page: this.Page(),

      sortOn: Joi.array().items(this.ProductSortOn()),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      pageNo: Joi.number(),

      pageSize: Joi.number(),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      outOfStockCount: Joi.number(),

      sellableCount: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      availableSizes: Joi.number(),

      articleFreshness: Joi.number(),

      totalArticles: Joi.number(),

      totalSizes: Joi.number(),

      name: Joi.string(),

      availableArticles: Joi.number(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      item: this.CatalogInsightItem(),

      brandDistribution: this.CatalogInsightBrand(),
    });
  }

  static CrossSellingData() {
    return Joi.object({
      articles: Joi.number(),

      products: Joi.number(),
    });
  }

  static CrossSellingResponse() {
    return Joi.object({
      brandDistribution: this.CatalogInsightBrand(),

      data: this.CrossSellingData(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      enabled: Joi.boolean(),

      storeIds: Joi.array().items(Joi.number()),

      optLevel: Joi.string(),

      brandIds: Joi.array().items(Joi.number()),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      companyId: Joi.number(),

      createdOn: Joi.number(),

      brandIds: Joi.array().items(Joi.number()),

      modifiedOn: Joi.number(),

      createdBy: Joi.object(),

      modifiedBy: Joi.object(),

      storeIds: Joi.array().items(Joi.number()),

      optLevel: Joi.string(),

      platform: Joi.string(),

      enabled: Joi.boolean(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      items: Joi.array().items(this.CompanyOptIn()),

      page: this.Page(),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      uid: Joi.number(),

      companyType: Joi.string(),

      name: Joi.string(),

      businessType: Joi.string(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      totalArticle: Joi.number(),

      companyId: Joi.number(),

      brandName: Joi.string(),

      brandId: Joi.number(),
    });
  }

  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      items: Joi.array().items(this.CompanyBrandDetail()),

      page: this.Page(),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      store: Joi.number(),

      company: Joi.string(),

      brand: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      companyId: Joi.number(),

      createdOn: Joi.string(),

      timing: Joi.object(),

      documents: Joi.array().items(Joi.object()),

      modifiedOn: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      displayName: Joi.string(),

      storeCode: Joi.string(),

      storeType: Joi.string(),

      additionalContacts: Joi.array().items(Joi.object()),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      items: Joi.array().items(this.StoreDetail()),

      page: this.Page(),
    });
  }

  static MultipleCommon() {
    return Joi.object({
      uid: Joi.string(),
    });
  }

  static BasePage() {
    return Joi.object({
      hasPrevious: Joi.boolean(),

      current: Joi.number(),

      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      items: this.MultipleCommon(),

      page: this.BasePage(),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      code: Joi.string(),

      errors: Joi.object(),

      message: Joi.string(),

      status: Joi.number(),

      meta: Joi.object(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string(),

      userId: Joi.string(),

      contact: Joi.string(),
    });
  }

  static GetDepartment() {
    return Joi.object({
      priorityOrder: Joi.number(),

      logo: Joi.string(),

      slug: Joi.string(),

      isActive: Joi.boolean(),

      createdOn: Joi.string(),

      pageNo: Joi.number(),

      pageSize: Joi.number(),

      itemType: Joi.string(),

      modifiedOn: Joi.string(),

      uid: Joi.number(),

      createdBy: this.UserSerializer(),

      modifiedBy: this.UserSerializer(),

      synonyms: Joi.array().items(Joi.string()),

      name: Joi.string(),

      search: Joi.string(),
    });
  }

  static BasePage1() {
    return Joi.object({
      itemTotal: Joi.number(),

      hasPrevious: Joi.boolean(),

      hasNext: Joi.boolean(),

      nextPageId: Joi.string(),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      items: Joi.array().items(this.GetDepartment()),

      page: this.BasePage1(),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      code: Joi.string(),

      errors: Joi.object(),

      message: Joi.string(),

      status: Joi.number(),

      meta: Joi.object(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      isArchived: Joi.boolean(),

      departments: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      logo: Joi.string(),

      isActive: Joi.boolean(),

      attributes: Joi.array().items(Joi.string()),

      createdOn: Joi.string(),

      isPhysical: Joi.boolean(),

      modifiedOn: Joi.string(),

      createdBy: Joi.object(),

      modifiedBy: Joi.object(),

      name: Joi.string(),

      description: Joi.string(),

      categories: Joi.array().items(Joi.string()),

      tag: Joi.string(),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      items: this.ProductTemplate(),

      page: this.BasePage(),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      data: this.MultipleCommon(),
    });
  }

  static InventoryValidationResponse() {
    return Joi.object({
      message: Joi.string(),

      data: this.MultipleCommon(),
    });
  }

  static HSNData() {
    return Joi.object({
      countryOfOrigin: Joi.array().items(Joi.string()),

      hsnCode: Joi.array().items(Joi.string()),
    });
  }

  static HSNCodesResponse() {
    return Joi.object({
      message: Joi.string(),

      data: this.HSNData(),
    });
  }

  static ProductConfligurationDownloads() {
    return Joi.object({
      multivalue: Joi.boolean(),

      data: Joi.array().items(this.MultipleCommon()),
    });
  }

  static Media2() {
    return Joi.object({
      portrait: Joi.string(),

      logo: Joi.string(),

      landscape: Joi.string(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      catalogId: Joi.number(),

      name: Joi.string(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      google: this.CategoryMappingValues(),

      ajio: this.CategoryMappingValues(),

      facebook: this.CategoryMappingValues(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number(),

      l2: Joi.number(),

      department: Joi.number(),
    });
  }

  static Category() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()),

      media: this.Media2(),

      tryouts: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      level: Joi.number(),

      isActive: Joi.boolean(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),

      marketplaces: this.CategoryMapping(),

      uid: Joi.number(),

      createdBy: Joi.object(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string()),

      modifiedBy: Joi.object(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      name: Joi.string(),

      id: Joi.string(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      items: Joi.array().items(this.Category()),

      page: this.BasePage1(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      departments: Joi.array().items(Joi.number()),

      media: this.Media2(),

      tryouts: Joi.array().items(Joi.string()),

      slug: Joi.string(),

      level: Joi.number(),

      isActive: Joi.boolean(),

      marketplaces: this.CategoryMapping(),

      priority: Joi.number(),

      synonyms: Joi.array().items(Joi.string()),

      hierarchy: Joi.array().items(this.Hierarchy()),

      name: Joi.string(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      uid: Joi.number(),

      message: Joi.string(),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      productOnlineDate: Joi.number(),

      isSet: Joi.boolean(),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string(),

      userId: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string(),

      userId: Joi.string(),
    });
  }

  static Attributes() {
    return Joi.object({
      imageNature: Joi.string(),

      sleeveLength: Joi.string(),

      verifiedOn: Joi.string(),

      isImageLessProduct: Joi.boolean(),

      createdBy: this.UserCommon(),

      modifiedBy: this.UserCommon(),

      pattern: Joi.string(),

      primaryColor: Joi.string(),

      l3Mapping: Joi.array().items(Joi.string()),

      verifiedBy: this.VerifiedBy(),

      essential: Joi.string(),

      modifiedOn: Joi.string(),

      neckType: Joi.string(),

      primaryMaterial: Joi.string(),

      createdOn: Joi.string(),

      productFit: Joi.string(),

      material: Joi.string(),

      color: Joi.string(),

      metaNature: Joi.string(),

      gender: Joi.array().items(Joi.string()),

      stage: Joi.string(),
    });
  }

  static Logo() {
    return Joi.object({
      url: Joi.string(),

      secureUrl: Joi.string(),

      aspectRatioF: Joi.number(),

      aspectRatio: Joi.string(),
    });
  }

  static Brand() {
    return Joi.object({
      uid: Joi.number(),

      logo: this.Logo(),

      name: Joi.string(),
    });
  }

  static Product() {
    return Joi.object({
      companyId: Joi.number(),

      isSet: Joi.boolean(),

      images: Joi.array().items(Joi.string()),

      highlights: Joi.string(),

      isActive: Joi.boolean(),

      sizeGuide: Joi.string(),

      productPublish: this.ProductPublished(),

      templateTag: Joi.string(),

      sizes: Joi.array().items(Joi.object()),

      isDependent: Joi.boolean(),

      multiSize: Joi.boolean(),

      media: Joi.array().items(Joi.string()),

      departments: Joi.array().items(Joi.number()),

      hsnCode: Joi.string(),

      attributes: this.Attributes(),

      categorySlug: Joi.string(),

      uid: Joi.number(),

      itemCode: Joi.string(),

      name: Joi.string(),

      id: Joi.string(),

      countryOfOrigin: Joi.string(),

      slug: Joi.string(),

      itemType: Joi.string(),

      allSizes: Joi.array().items(Joi.string()),

      description: Joi.string(),

      currency: Joi.string(),

      brand: this.Brand(),
    });
  }

  static PageData() {
    return Joi.object({
      hasPrevious: Joi.boolean(),

      current: Joi.string(),

      size: Joi.number(),

      itemTotal: Joi.number(),

      hasNext: Joi.boolean(),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      items: Joi.array().items(this.Product()),

      page: this.PageData(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.string(),

      name: Joi.string(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      productOnlineDate: Joi.string(),

      isSet: Joi.boolean(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string(),

      tag: Joi.string(),
    });
  }

  static OrderQuantity() {
    return Joi.object({
      minimum: Joi.number(),

      isSet: Joi.boolean(),

      maximum: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string(),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturingTime: Joi.number(),

      manufacturingTimeUnit: Joi.string(),

      isCustomOrder: Joi.boolean(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      companyId: Joi.number(),

      isSet: Joi.boolean(),

      highlights: Joi.array().items(Joi.string()),

      isActive: Joi.boolean(),

      isImageLessProduct: Joi.boolean(),

      sizeGuide: Joi.string(),

      trader: this.Trader(),

      traderType: Joi.string(),

      changeRequestId: Joi.string(),

      productPublish: this.ProductPublish(),

      templateTag: Joi.string(),

      teaserTag: this.TeaserTag(),

      variants: Joi.object(),

      isDependent: Joi.boolean(),

      multiSize: Joi.boolean(),

      media: Joi.array().items(this.Media1()),

      moq: this.OrderQuantity(),

      departments: Joi.array().items(Joi.number()),

      hsnCode: Joi.string(),

      noOfBoxes: Joi.number(),

      productGroupTag: Joi.array().items(Joi.string()),

      returnConfig: this.ReturnConfig(),

      categorySlug: Joi.string(),

      shortDescription: Joi.string(),

      uid: Joi.number(),

      customJson: Joi.object(),

      itemCode: Joi.string(),

      name: Joi.string(),

      countryOfOrigin: Joi.string(),

      slug: Joi.string(),

      brandUid: Joi.number(),

      requester: Joi.string(),

      itemType: Joi.string(),

      customOrder: this.CustomOrder(),

      tags: Joi.array().items(Joi.string()),

      description: Joi.string(),

      currency: Joi.string(),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string(),

      userId: Joi.string(),

      fullName: Joi.string(),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      companyId: Joi.number(),

      isActive: Joi.boolean(),

      createdOn: Joi.string(),

      total: Joi.number(),

      modifiedOn: Joi.string(),

      cancelled: Joi.number(),

      createdBy: this.UserDetail(),

      modifiedBy: this.UserDetail(),

      failedRecords: Joi.array().items(Joi.string()),

      cancelledRecords: Joi.array().items(Joi.string()),

      filePath: Joi.string(),

      succeed: Joi.number(),

      stage: Joi.string(),

      failed: Joi.number(),

      templateTag: Joi.string(),

      template: this.ProductTemplate(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      items: this.ProductBulkRequest(),

      page: this.PageData(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      email: Joi.string(),

      uid: Joi.string(),

      userId: Joi.string(),

      username: Joi.string(),
    });
  }

  static BulkJob() {
    return Joi.object({
      companyId: Joi.number(),

      isActive: Joi.boolean(),

      createdOn: Joi.string(),

      trackingUrl: Joi.string(),

      total: Joi.number(),

      modifiedOn: Joi.string(),

      cancelled: Joi.number(),

      customTemplateTag: Joi.string(),

      createdBy: this.UserInfo1(),

      modifiedBy: this.UserInfo1(),

      failedRecords: Joi.array().items(Joi.object()),

      cancelledRecords: Joi.array().items(Joi.object()),

      succeed: Joi.number(),

      filePath: Joi.string(),

      stage: Joi.string(),

      failed: Joi.number(),

      templateTag: Joi.string(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      batchId: Joi.string(),

      companyId: Joi.number(),

      templateTag: Joi.string(),

      data: Joi.array().items(Joi.object()),
    });
  }

  static NestedTags() {
    return Joi.object({
      tags: Joi.array().items(Joi.string()),
    });
  }

  static ProductTagsViewResponse() {
    return Joi.object({
      items: this.NestedTags(),
    });
  }

  static Items() {
    return Joi.object({
      companyId: Joi.number(),

      createdOn: Joi.string(),

      isActive: Joi.boolean(),

      trackingUrl: Joi.string(),

      total: Joi.number(),

      modifiedOn: Joi.string(),

      cancelled: Joi.number(),

      createdBy: this.UserCommon(),

      modifiedBy: this.UserCommon(),

      failedRecords: Joi.array().items(Joi.string()),

      retry: Joi.number(),

      filePath: Joi.string(),

      succeed: Joi.number(),

      cancelledRecords: Joi.array().items(Joi.string()),

      stage: Joi.string(),

      failed: Joi.number(),

      id: Joi.string(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Items()),

      page: this.PageData(),
    });
  }

  static ProductBulkAssets() {
    return Joi.object({
      url: Joi.string(),

      companyId: Joi.number(),

      user: Joi.object(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      pageNo: Joi.number(),

      pageSize: Joi.number(),

      total: Joi.number(),

      size: Joi.string(),

      search: Joi.string(),
    });
  }

  static SetSize() {
    return Joi.object({
      pieces: Joi.number(),

      size: Joi.string(),
    });
  }

  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(this.SetSize()),
    });
  }

  static InventorySet() {
    return Joi.object({
      sizeDistribution: this.SizeDistribution(),

      quantity: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtinValue: Joi.string(),

      primary: Joi.boolean(),

      gtinType: Joi.string(),
    });
  }

  static InvSize() {
    return Joi.object({
      priceTransfer: Joi.number(),

      storeCode: Joi.string(),

      isSet: Joi.boolean(),

      itemHeight: Joi.number(),

      itemWeight: Joi.number(),

      set: this.InventorySet(),

      itemWeightUnitOfMeasure: Joi.string(),

      currency: Joi.string(),

      quantity: Joi.number(),

      itemDimensionsUnitOfMeasure: Joi.string(),

      priceEffective: Joi.number(),

      size: Joi.string(),

      itemLength: Joi.number(),

      identifiers: Joi.array().items(this.GTIN()),

      price: Joi.number(),

      itemWidth: Joi.number(),
    });
  }

  static ItemQuery() {
    return Joi.object({
      uid: Joi.number(),

      itemCode: Joi.string(),

      brandUid: Joi.number(),
    });
  }

  static InventoryRequest1() {
    return Joi.object({
      sizes: Joi.array().items(this.InvSize()),

      companyId: Joi.number(),

      item: this.ItemQuery(),
    });
  }

  static BulkRequestGet() {
    return Joi.object({
      pageNo: Joi.number(),

      pageSize: Joi.number(),

      total: Joi.number(),

      customTemplateTag: Joi.string(),

      endDate: Joi.string(),

      startDate: Joi.string(),

      stage: Joi.string(),

      templateTag: Joi.string(),

      search: Joi.string(),
    });
  }

  static CommonResponse() {
    return Joi.object({
      success: Joi.string(),
    });
  }

  static Size1() {
    return Joi.object({
      priceTransfer: Joi.number(),

      storeCode: Joi.string(),

      isSet: Joi.boolean(),

      itemHeight: Joi.number(),

      itemWeight: Joi.number(),

      set: this.InventorySet(),

      itemWeightUnitOfMeasure: Joi.string(),

      currency: Joi.string(),

      quantity: Joi.number(),

      itemDimensionsUnitOfMeasure: Joi.string(),

      priceEffective: Joi.number(),

      size: Joi.string(),

      sellerIdentifier: Joi.string(),

      itemLength: Joi.number(),

      identifiers: Joi.array().items(Joi.object()),

      price: Joi.number(),

      itemWidth: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(this.Size1()),

      companyId: Joi.number(),

      user: Joi.object(),

      batchId: Joi.string(),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      url: Joi.string(),

      sellerId: Joi.number(),

      completedOn: Joi.string(),

      triggerOn: Joi.string(),

      status: Joi.string(),

      requestParams: Joi.object(),

      taskId: Joi.string(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      type: Joi.string(),

      store: Joi.array().items(Joi.number()),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static FilerList() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string(),
    });
  }

  static InventoryConfig() {
    return Joi.object({
      multivalues: Joi.boolean(),

      data: Joi.array().items(this.FilerList()),
    });
  }

  static CompanyAddress() {
    return Joi.object({
      address2: Joi.string(),

      countryCode: Joi.string(),

      pincode: Joi.number(),

      landmark: Joi.string(),

      state: Joi.string(),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address1: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string(),

      legalName: Joi.string(),

      verified: Joi.boolean(),

      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      countryCode: Joi.string(),

      country: Joi.string(),
    });
  }

  static ReferralInfo() {
    return Joi.object({
      referralCode: Joi.string(),
    });
  }

  static CompanyStoreSerializerRequest() {
    return Joi.object({
      franchiseEnabled: Joi.boolean(),

      name: Joi.string(),

      address: this.CompanyAddress(),

      businessType: Joi.string(),

      uid: Joi.number(),

      document: this.Document(),

      businessCountryInfo: this.BusinessCountryInfo(),

      warnings: Joi.object(),

      referralInfo: this.ReferralInfo(),

      brands: Joi.array().items(Joi.number()),

      businessInfo: Joi.string(),

      notificationEmails: Joi.array().items(Joi.string()),
    });
  }

  static BusinessCountryInfo1() {
    return Joi.object({
      countryCode: Joi.string(),

      country: Joi.string(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string()),

      phone: Joi.array().items(this.PhoneNumber()),
    });
  }

  static Website() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static BusinessDetails() {
    return Joi.object({
      website: this.Website(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      address2: Joi.string(),

      countryCode: Joi.string(),

      pincode: Joi.number(),

      landmark: Joi.string(),

      state: Joi.string(),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address1: Joi.string(),

      addressType: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),
    });
  }

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      uid: Joi.number(),

      createdOn: Joi.string(),

      stage: Joi.string(),

      warnings: Joi.object(),

      notificationEmails: Joi.array().items(Joi.string()),

      name: Joi.string(),

      verifiedBy: this.UserSerializer(),

      documents: Joi.array().items(this.Document()),

      createdBy: this.UserSerializer(),

      franchiseEnabled: Joi.boolean(),

      modifiedOn: Joi.string(),

      verifiedOn: Joi.string(),

      businessType: Joi.string(),

      businessCountryInfo: this.BusinessCountryInfo1(),

      modifiedBy: this.UserSerializer(),

      contactDetails: this.ContactDetails(),

      businessDetails: this.BusinessDetails(),

      companyType: Joi.string(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      businessInfo: Joi.string(),
    });
  }

  static DocumentsObj() {
    return Joi.object({
      pending: Joi.number(),

      verified: Joi.number(),
    });
  }

  static MetricsSerializer() {
    return Joi.object({
      brand: this.DocumentsObj(),

      companyDocuments: this.DocumentsObj(),

      uid: Joi.number(),

      store: this.DocumentsObj(),

      stage: Joi.string(),

      product: this.DocumentsObj(),

      storeDocuments: this.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      landscape: Joi.string(),

      portrait: Joi.string(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      name: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      brandTier: Joi.string(),

      localeLanguage: Joi.object(),

      uid: Joi.number(),

      companyId: Joi.number(),

      logo: Joi.string(),

      customJson: Joi.object(),

      banner: this.BrandBannerSerializer(),

      description: Joi.string(),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      userId: Joi.string(),

      contact: Joi.string(),

      username: Joi.string(),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      name: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      modifiedOn: Joi.string(),

      verifiedBy: this.UserSerializer1(),

      slugKey: Joi.string(),

      verifiedOn: Joi.string(),

      rejectReason: Joi.string(),

      localeLanguage: Joi.object(),

      uid: Joi.number(),

      createdBy: this.UserSerializer1(),

      createdOn: Joi.string(),

      logo: Joi.string(),

      banner: this.BrandBannerSerializer(),

      stage: Joi.string(),

      customJson: Joi.object(),

      modifiedBy: this.UserSerializer1(),

      description: Joi.string(),

      warnings: Joi.object(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      company: Joi.number(),

      brands: Joi.array().items(Joi.number()),

      uid: Joi.number(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(Joi.object()),
    });
  }

  static GetAddressSerializer1() {
    return Joi.object({
      address2: Joi.string(),

      countryCode: Joi.string(),

      pincode: Joi.number(),

      landmark: Joi.string(),

      state: Joi.string(),

      longitude: Joi.number(),

      latitude: Joi.number(),

      address1: Joi.string(),

      addressType: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      name: Joi.string(),

      email: Joi.string(),

      mobileNo: this.PhoneNumber(),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      minute: Joi.number(),

      hour: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      weekday: Joi.string(),

      closing: this.LocationTimingSerializer(),

      open: Joi.boolean(),

      opening: this.LocationTimingSerializer(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      storeUid: Joi.number(),

      onSameStore: Joi.boolean(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      username: Joi.string(),

      enabled: Joi.boolean(),

      password: Joi.string(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      eInvoice: this.InvoiceCredSerializer(),

      eWaybill: this.InvoiceCredSerializer(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      displayName: Joi.string(),

      name: Joi.string(),

      address: this.GetAddressSerializer1(),

      manager: this.LocationManagerSerializer(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      storeType: Joi.string(),

      documents: Joi.array().items(this.Document()),

      productReturnConfig: this.ProductReturnConfigSerializer(),

      uid: Joi.number(),

      code: Joi.string(),

      customJson: Joi.object(),

      company: Joi.number(),

      stage: Joi.string(),

      warnings: Joi.object(),

      gstCredentials: this.InvoiceDetailsSerializer(),

      notificationEmails: Joi.array().items(Joi.string()),

      contactNumbers: Joi.array().items(this.PhoneNumber()),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(Joi.object()),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      order: Joi.string(),

      inventory: Joi.string(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      name: Joi.string(),

      companyType: Joi.string(),

      modifiedOn: Joi.string(),

      verifiedBy: this.UserSerializer(),

      verifiedOn: Joi.string(),

      businessType: Joi.string(),

      rejectReason: Joi.string(),

      uid: Joi.number(),

      createdBy: this.UserSerializer(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      createdOn: Joi.string(),

      stage: Joi.string(),

      modifiedBy: this.UserSerializer(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      displayName: Joi.string(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      integrationType: this.LocationIntegrationType(),

      uid: Joi.number(),

      createdOn: Joi.string(),

      customJson: Joi.object(),

      stage: Joi.string(),

      warnings: Joi.object(),

      gstCredentials: this.InvoiceDetailsSerializer(),

      notificationEmails: Joi.array().items(Joi.string()),

      name: Joi.string(),

      manager: this.LocationManagerSerializer(),

      verifiedBy: this.UserSerializer1(),

      documents: Joi.array().items(this.Document()),

      productReturnConfig: this.ProductReturnConfigSerializer(),

      createdBy: this.UserSerializer1(),

      company: this.GetCompanySerializer(),

      modifiedOn: Joi.string(),

      verifiedOn: Joi.string(),

      modifiedBy: this.UserSerializer1(),

      phoneNumber: Joi.string(),

      address: this.GetAddressSerializer(),

      storeType: Joi.string(),

      code: Joi.string(),

      contactNumbers: Joi.array().items(this.PhoneNumber()),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number(),

      url: Joi.string(),
    });
  }

  static StartResponse() {
    return Joi.object({
      fileName: Joi.string(),

      filePath: Joi.string(),

      contentType: Joi.string(),

      method: Joi.string(),

      namespace: Joi.string(),

      operation: Joi.string(),

      size: Joi.number(),

      upload: this.Upload(),

      cdn: this.CDN(),
    });
  }

  static StartRequest() {
    return Joi.object({
      fileName: Joi.string(),

      contentType: Joi.string(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      id: Joi.string(),

      fileName: Joi.string(),

      filePath: Joi.string(),

      contentType: Joi.string(),

      method: Joi.string(),

      namespace: Joi.string(),

      operation: Joi.string(),

      size: Joi.number(),

      upload: this.Upload(),

      cdn: this.CDN(),

      success: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static Opts() {
    return Joi.object({
      attempts: Joi.number(),

      timestamp: Joi.number(),

      delay: Joi.number(),
    });
  }

  static CopyFileTask() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      data: this.BulkRequest(),

      opts: this.Opts(),

      progress: Joi.number(),

      delay: Joi.number(),

      timestamp: Joi.number(),

      attemptsMade: Joi.number(),

      stacktrace: Joi.array().items(Joi.string()),

      finishedOn: Joi.number(),

      processedOn: Joi.number(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      trackingUrl: Joi.string(),

      task: this.CopyFileTask(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string(),

      rewrite: Joi.string(),

      basepath: Joi.string(),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string()),

      destination: this.Destination(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string(),

      signedUrl: Joi.string(),

      expiry: Joi.number(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number(),

      urls: Joi.array().items(Joi.string()),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      id: Joi.string(),

      fileName: Joi.string(),

      operation: Joi.string(),

      namespace: Joi.string(),

      contentType: Joi.string(),

      filePath: Joi.string(),

      upload: this.Upload(),

      cdn: this.CDN(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()),

      page: this.Page(),
    });
  }

  static RedirectDevice() {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  }

  static WebRedirect() {
    return Joi.object({
      link: Joi.string(),

      type: Joi.string(),
    });
  }

  static Redirects() {
    return Joi.object({
      ios: this.RedirectDevice(),

      android: this.RedirectDevice(),

      web: this.WebRedirect(),

      forceWeb: Joi.boolean(),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string(),

      url: Joi.string(),

      hash: Joi.string(),

      active: Joi.string(),

      type: Joi.string(),

      expireAt: Joi.string(),

      enableTracking: Joi.boolean(),

      redirects: this.Redirects(),
    });
  }

  static UrlInfo() {
    return Joi.object({
      original: Joi.string(),

      short: Joi.string(),

      hash: Joi.string(),
    });
  }

  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string(),

      url: this.UrlInfo(),

      createdBy: Joi.string(),

      personalized: Joi.string(),

      appRedirect: Joi.string(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      id: Joi.string(),

      enableTracking: Joi.boolean(),

      expireAt: Joi.boolean(),

      application: Joi.string(),

      userId: Joi.boolean(),

      createdAt: Joi.boolean(),

      updatedAt: Joi.boolean(),

      redirects: this.Redirects(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      size: Joi.number(),

      itemTotal: Joi.number(),

      current: Joi.number(),

      hasNext: Joi.string(),

      type: Joi.string(),
    });
  }

  static DataTresholdDTO() {
    return Joi.object({
      minPrice: Joi.number(),

      safeStock: Joi.number(),

      periodThreshold: Joi.number(),

      periodThresholdType: Joi.string(),

      periodTypeList: Joi.array().items(this.GenericDTO()),
    });
  }

  static GenericDTO() {
    return Joi.object({
      text: Joi.string(),

      value: Joi.object(),
    });
  }

  static JobConfigDTO() {
    return Joi.object({
      integration: Joi.string(),

      integrationData: Joi.object(),

      companyName: Joi.string(),

      companyId: Joi.number(),

      taskDetails: this.TaskDTO(),

      thresholdDetails: this.DataTresholdDTO(),

      jobCode: Joi.string(),

      alias: Joi.string(),
    });
  }

  static TaskDTO() {
    return Joi.object({
      type: Joi.number(),

      groupList: Joi.array().items(this.GenericDTO()),
    });
  }

  static ResponseEnvelopeString() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.string(),

      payload: Joi.string(),

      traceId: Joi.string(),

      page: this.Page(),
    });
  }

  static AWSS3config() {
    return Joi.object({
      bucket: Joi.string(),

      region: Joi.string(),

      dir: Joi.string(),

      accessKey: Joi.string(),

      secretKey: Joi.string(),

      localFilePath: Joi.string(),

      archivePath: Joi.string(),

      archive: Joi.boolean(),

      delete: Joi.boolean(),

      unzip: Joi.boolean(),

      zipFormat: Joi.string(),

      fileRegex: Joi.string(),

      archiveConfig: this.ArchiveConfig(),
    });
  }

  static ArchiveConfig() {
    return Joi.object({
      delete: Joi.boolean(),

      archive: Joi.boolean(),

      archiveDir: Joi.string(),
    });
  }

  static Audit() {
    return Joi.object({
      createdBy: Joi.string(),

      modifiedBy: Joi.string(),

      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static CatalogMasterConfig() {
    return Joi.object({
      sourceSlug: Joi.string(),
    });
  }

  static CompanyConfig() {
    return Joi.object({
      companyId: Joi.number(),

      excludeSteps: Joi.array().items(Joi.number()),

      hiddenClosetKeys: Joi.array().items(Joi.string()),

      openTags: Joi.object(),

      taxIdentifiers: Joi.array().items(Joi.string()),

      deleteQuantityThreshold: Joi.number(),
    });
  }

  static DBConfig() {
    return Joi.object({
      vendor: Joi.string(),

      host: Joi.string(),

      port: Joi.number(),

      username: Joi.string(),

      password: Joi.string(),

      dbname: Joi.string(),

      query: Joi.string(),

      procedure: Joi.boolean(),

      driverClass: Joi.string(),

      jdbcUrl: Joi.string(),

      optionalProperties: Joi.object(),
    });
  }

  static DBConnectionProfile() {
    return Joi.object({
      inventory: Joi.string(),
    });
  }

  static DBParamConfig() {
    return Joi.object({
      params: Joi.object(),
    });
  }

  static DefaultHeadersDTO() {
    return Joi.object({
      store: this.PropBeanDTO(),

      intfArticleId: this.PropBeanDTO(),

      priceEffective: this.PropBeanDTO(),

      quantity: this.PropBeanDTO(),
    });
  }

  static DocMappingConfig() {
    return Joi.object({
      properties: Joi.object(),

      junkDataThresholdCount: Joi.number(),

      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),

      unwindField: Joi.string(),

      defaultHeaders: this.DefaultHeadersDTO(),
    });
  }

  static EmailConfig() {
    return Joi.object({
      recepient: Joi.string(),

      host: Joi.string(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      readFromContent: Joi.boolean(),

      filterBasedOnRecepients: Joi.boolean(),

      pcol: Joi.string(),

      subjectLineRegex: Joi.string(),

      senderAddress: Joi.string(),

      localDir: Joi.string(),

      folderNameHierarchies: Joi.array().items(Joi.string()),

      attachmentRegex: Joi.string(),

      bodyContentRegex: Joi.string(),

      passwordProtected: Joi.boolean(),

      zipFormat: Joi.string(),

      attachmentMandate: Joi.boolean(),

      filterFilesAfterExtraction: Joi.boolean(),

      archiveConfig: this.ArchiveConfig(),

      readAllUnreadMails: Joi.boolean(),

      contentType: Joi.string(),

      downloadableLink: Joi.boolean(),

      properties: Joi.object(),
    });
  }

  static FTPConfig() {
    return Joi.object({
      host: Joi.string(),

      port: Joi.number(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      retries: Joi.number(),

      interval: Joi.number(),

      localDir: Joi.string(),

      remoteDir: Joi.string(),

      zipFileRegex: Joi.string(),

      archiveConfig: this.ArchiveConfig(),

      fileRegex: Joi.string(),

      zipFormat: Joi.string(),

      readAllFiles: Joi.boolean(),
    });
  }

  static FileConfig() {
    return Joi.object({
      delimiter: Joi.string(),

      charset: Joi.string(),

      properties: Joi.object(),

      fileHasHeader: Joi.boolean(),

      headerIndex: Joi.number(),

      headerArray: Joi.array().items(Joi.string()),

      dataStartIndex: Joi.number(),

      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),

      junkDataThresholdCount: Joi.number(),

      fileType: Joi.string(),

      lineValidityCheck: Joi.boolean(),

      sheetNames: Joi.array().items(Joi.string()),

      readAllSheets: Joi.boolean(),

      quoteChar: Joi.string(),

      escapeChar: Joi.string(),

      defaultHeaders: this.DefaultHeadersDTO(),
    });
  }

  static GoogleSpreadSheetConfig() {
    return Joi.object({
      range: Joi.string(),

      sheetId: Joi.string(),

      clientSecretLocation: Joi.string(),

      credStorageDirectory: Joi.string(),

      localDir: Joi.string(),

      archiveConfig: this.ArchiveConfig(),
    });
  }

  static HttpConfig() {
    return Joi.object({
      hosturl: Joi.string(),

      username: Joi.string(),

      password: Joi.string(),

      requestParams: Joi.object(),

      httpMethod: Joi.string(),

      requestPayload: Joi.string(),

      localPath: Joi.string(),

      archiveConfig: this.ArchiveConfig(),
    });
  }

  static JobConfig() {
    return Joi.object({
      id: Joi.number(),

      jobCode: Joi.string(),

      taskType: Joi.string(),

      syncDelay: Joi.number(),

      cronExpression: Joi.string(),

      storeFilter: this.StoreFilter(),

      processConfig: this.ProcessConfig(),

      storeConfig: Joi.array().items(this.StoreConfig()),

      properties: Joi.object(),

      immediateFirstRun: Joi.boolean(),

      disable: Joi.boolean(),

      dependentJobCodes: Joi.array().items(Joi.string()),

      companyConfig: Joi.array().items(this.CompanyConfig()),

      companyIds: Joi.array().items(Joi.number()),

      taxIdentifiers: Joi.array().items(Joi.string()),

      priority: Joi.string(),

      periodThreshold: Joi.number(),

      periodThresholdType: Joi.string(),

      dbConnectionProfile: this.DBConnectionProfile(),

      params: Joi.object(),

      openTags: Joi.object(),

      deleteQuantityThreshold: Joi.number(),

      catalogMasterConfig: this.CatalogMasterConfig(),

      aggregatorTypes: Joi.array().items(Joi.string()),

      integrationType: Joi.string(),

      minPrice: Joi.number(),

      audit: this.Audit(),

      version: Joi.number(),

      alias: Joi.string(),
    });
  }

  static JobConfigRawDTO() {
    return Joi.object({
      integration: Joi.string(),

      companyName: Joi.string(),

      companyId: Joi.number(),

      data: this.JobConfig(),
    });
  }

  static JsonDocConfig() {
    return Joi.object({
      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),
    });
  }

  static LocalFileConfig() {
    return Joi.object({
      retries: Joi.number(),

      interval: Joi.number(),

      localDir: Joi.string(),

      workingDir: Joi.string(),

      unzip: Joi.boolean(),

      zipFileRegex: Joi.string(),

      fileRegex: Joi.string(),

      zipFormat: Joi.string(),

      archiveConfig: this.ArchiveConfig(),

      readAllFiles: Joi.boolean(),
    });
  }

  static MongoDocConfig() {
    return Joi.object({
      collectionName: Joi.string(),

      findQuery: Joi.object(),

      projectionQuery: Joi.object(),

      propBeanConfigs: Joi.array().items(this.PropBeanConfig()),

      aggregatePipeline: Joi.array().items(Joi.object()),

      skipSave: Joi.boolean(),
    });
  }

  static OAuthConfig() {
    return Joi.object({
      limit: Joi.number(),

      pages: Joi.number(),

      interval: Joi.number(),

      consumerKey: Joi.string(),

      consumerSecret: Joi.string(),

      token: Joi.string(),

      tokenSecret: Joi.string(),

      restUrl: Joi.string(),

      restBaseUrl: Joi.string(),

      functionName: Joi.string(),
    });
  }

  static ProcessConfig() {
    return Joi.object({
      dbConfig: this.DBConfig(),

      dbParamConfig: this.DBParamConfig(),

      sftpConfig: this.SFTPConfig(),

      awsS3Config: this.AWSS3config(),

      mongoDocConfig: this.MongoDocConfig(),

      ftpConfig: this.FTPConfig(),

      emailConfig: this.EmailConfig(),

      fileConfig: this.FileConfig(),

      jsonDocConfig: this.JsonDocConfig(),

      docMappingConfig: this.DocMappingConfig(),

      taskStepConfig: this.TaskStepConfig(),

      httpConfig: this.HttpConfig(),

      localFileConfig: this.LocalFileConfig(),

      oauthConfig: this.OAuthConfig(),

      googleSpreadsheetConfig: this.GoogleSpreadSheetConfig(),
    });
  }

  static PropBeanConfig() {
    return Joi.object({
      required: Joi.boolean(),

      mapping: Joi.object(),

      optional: Joi.boolean(),

      send: this.Send(),

      validations: Joi.array().items(Joi.object()),

      values: Joi.array().items(Joi.string()),

      include: Joi.boolean(),

      sourceField: Joi.string(),

      sourceFields: Joi.array().items(Joi.string()),

      destinationField: Joi.string(),

      dataType: Joi.string(),

      defaultValue: Joi.object(),

      constValue: Joi.object(),

      concatStr: Joi.string(),

      functionName: Joi.string(),

      transformerName: Joi.string(),

      allParamFunctionName: Joi.string(),

      subSeparator: Joi.string(),

      indexField: Joi.string(),

      ignoreIfNotExists: Joi.boolean(),

      identifierType: Joi.string(),

      projectionQuery: Joi.object(),

      enrichFromMaster: Joi.boolean(),
    });
  }

  static PropBeanDTO() {
    return Joi.object({
      required: Joi.boolean(),

      optional: Joi.boolean(),

      include: Joi.boolean(),

      sourceField: Joi.string(),

      sourceFields: Joi.array().items(Joi.string()),

      destinationField: Joi.string(),

      dataType: Joi.string(),

      defaultValue: Joi.object(),

      constValue: Joi.object(),

      concatStr: Joi.string(),

      functionName: Joi.string(),

      transformerName: Joi.string(),

      allParamFunctionName: Joi.string(),

      subSeparator: Joi.string(),

      indexField: Joi.string(),

      ignoreIfNotExists: Joi.boolean(),

      identifierType: Joi.string(),

      projectionQuery: Joi.object(),

      enrichFromMaster: Joi.boolean(),
    });
  }

  static ResponseEnvelopeListJobConfigRawDTO() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.array().items(this.JobConfigRawDTO()),

      payload: Joi.array().items(this.JobConfigRawDTO()),

      traceId: Joi.string(),

      page: this.Page(),
    });
  }

  static SFTPConfig() {
    return Joi.object({
      host: Joi.string(),

      port: Joi.number(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      retries: Joi.number(),

      interval: Joi.number(),

      privateKeyPath: Joi.string(),

      strictHostKeyChecking: Joi.boolean(),

      localDir: Joi.string(),

      remoteDir: Joi.string(),

      passwordProtected: Joi.boolean(),

      zipFileRegex: Joi.string(),

      fileRegex: Joi.string(),

      zipFormat: Joi.string(),

      archiveConfig: this.ArchiveConfig(),

      readAllFiles: Joi.boolean(),
    });
  }

  static Send() {
    return Joi.object({
      raw: Joi.boolean(),

      processed: Joi.boolean(),
    });
  }

  static StoreConfig() {
    return Joi.object({
      jobCode: Joi.string(),

      storeid: Joi.string(),

      storeAlias: Joi.string(),

      storeFileRegex: Joi.string(),

      storeFileName: Joi.string(),

      processConfig: this.ProcessConfig(),

      properties: Joi.object(),
    });
  }

  static StoreFilter() {
    return Joi.object({
      includeTags: Joi.array().items(Joi.string()),

      excludeTags: Joi.array().items(Joi.string()),

      query: Joi.object(),
    });
  }

  static TaskConfig() {
    return Joi.object({
      name: Joi.string(),

      taskConfigId: Joi.number(),

      taskParams: Joi.array().items(this.TaskParam()),
    });
  }

  static TaskParam() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.object(),
    });
  }

  static TaskStepConfig() {
    return Joi.object({
      taskConfigs: Joi.array().items(this.TaskConfig()),

      taskConfigIds: Joi.array().items(Joi.number()),

      taskConfigGroupIds: Joi.array().items(Joi.number()),
    });
  }

  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.array().items(this.JobConfigDTO()),

      payload: Joi.array().items(this.JobConfigDTO()),

      traceId: Joi.string(),

      page: this.Page(),
    });
  }

  static ResponseEnvelopeJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: this.JobConfigDTO(),

      payload: this.JobConfigDTO(),

      traceId: Joi.string(),

      page: this.Page(),
    });
  }

  static JobConfigListDTO() {
    return Joi.object({
      code: Joi.string(),

      alias: Joi.string(),

      modifiedBy: Joi.string(),

      createdBy: Joi.string(),

      modifiedOn: Joi.string(),

      createdOn: Joi.string(),

      active: Joi.boolean(),

      type: Joi.string(),
    });
  }

  static ResponseEnvelopeListJobConfigListDTO() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      totalTimeTakenInMillis: Joi.number(),

      httpStatus: Joi.string(),

      items: Joi.array().items(this.JobConfigListDTO()),

      payload: Joi.array().items(this.JobConfigListDTO()),

      traceId: Joi.string(),

      page: this.Page(),
    });
  }

  static ApplicationInventory() {
    return Joi.object({
      inventory: this.AppInventoryConfig(),

      authentication: this.AuthenticationConfig(),

      articleAssignment: this.ArticleAssignmentConfig(),

      rewardPoints: this.RewardPointsConfig(),

      cart: this.AppCartConfig(),

      payment: this.AppPaymentConfig(),

      order: this.AppOrderConfig(),

      logistics: this.AppLogisticsConfig(),

      business: Joi.string(),

      commsEnabled: Joi.boolean(),

      platforms: Joi.array().items(Joi.string()),

      id: Joi.string(),

      loyaltyPoints: this.LoyaltyPoints(),

      app: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      modifiedBy: Joi.string(),
    });
  }

  static AppInventoryConfig() {
    return Joi.object({
      brand: this.InventoryBrand(),

      store: this.InventoryStore(),

      category: this.InventoryCategory(),

      price: this.InventoryPrice(),

      discount: this.InventoryDiscount(),

      outOfStock: Joi.boolean(),

      franchiseEnabled: Joi.boolean(),

      excludeCategory: Joi.array().items(Joi.any()),

      image: Joi.array().items(Joi.string()),

      companyStore: Joi.array().items(Joi.any()),
    });
  }

  static InventoryBrand() {
    return Joi.object({
      criteria: Joi.string(),

      brands: Joi.array().items(Joi.any()),
    });
  }

  static InventoryStore() {
    return Joi.object({
      criteria: Joi.string(),

      stores: Joi.array().items(Joi.any()),

      rules: this.AppStoreRules(),
    });
  }

  static AppStoreRules() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.any()),
    });
  }

  static InventoryCategory() {
    return Joi.object({
      criteria: Joi.string(),

      categories: Joi.array().items(Joi.any()),
    });
  }

  static InventoryPrice() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static InventoryDiscount() {
    return Joi.object({
      min: Joi.number(),

      max: Joi.number(),
    });
  }

  static AuthenticationConfig() {
    return Joi.object({
      required: Joi.boolean(),

      provider: Joi.string(),
    });
  }

  static ArticleAssignmentConfig() {
    return Joi.object({
      rules: this.ArticleAssignmentRules(),

      postOrderReassignment: Joi.boolean(),

      enforcedStores: Joi.array().items(Joi.any()),
    });
  }

  static ArticleAssignmentRules() {
    return Joi.object({
      storePriority: this.StorePriority(),
    });
  }

  static StorePriority() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetypeOrder: Joi.array().items(Joi.any()),
    });
  }

  static RewardPointsConfig() {
    return Joi.object({
      credit: this.Credit(),

      debit: this.Debit(),
    });
  }

  static Credit() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static Debit() {
    return Joi.object({
      enabled: Joi.boolean(),

      autoApply: Joi.boolean(),

      strategyChannel: Joi.string(),
    });
  }

  static AppCartConfig() {
    return Joi.object({
      deliveryCharges: this.DeliveryCharges(),

      enabled: Joi.boolean(),

      maxCartItems: Joi.number(),

      minCartValue: Joi.number(),

      bulkCoupons: Joi.boolean(),
    });
  }

  static DeliveryCharges() {
    return Joi.object({
      enabled: Joi.boolean(),

      charges: this.Charges(),
    });
  }

  static Charges() {
    return Joi.object({
      threshold: Joi.number(),

      charges: Joi.number(),
    });
  }

  static AppPaymentConfig() {
    return Joi.object({
      callbackUrl: this.CallbackUrl(),

      methods: this.Methods(),

      paymentSelectionLock: this.PaymentSelectionLock(),

      modeOfPayment: Joi.string(),

      source: Joi.string(),

      enabled: Joi.boolean(),

      codAmountLimit: Joi.number(),

      codCharges: Joi.number(),
    });
  }

  static CallbackUrl() {
    return Joi.object({
      app: Joi.string(),

      web: Joi.string(),
    });
  }

  static Methods() {
    return Joi.object({
      pl: this.PaymentModeConfig(),

      card: this.PaymentModeConfig(),

      nb: this.PaymentModeConfig(),

      wl: this.PaymentModeConfig(),

      ps: this.PaymentModeConfig(),

      upi: this.PaymentModeConfig(),

      qr: this.PaymentModeConfig(),

      cod: this.PaymentModeConfig(),

      pp: this.PaymentModeConfig(),

      jp: this.PaymentModeConfig(),

      pac: this.PaymentModeConfig(),

      fc: this.PaymentModeConfig(),

      jiopp: this.PaymentModeConfig(),

      stripepg: this.PaymentModeConfig(),

      juspaypg: this.PaymentModeConfig(),

      payubizpg: this.PaymentModeConfig(),

      payumoneypg: this.PaymentModeConfig(),

      rupifipg: this.PaymentModeConfig(),

      simpl: this.PaymentModeConfig(),
    });
  }

  static PaymentModeConfig() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static PaymentSelectionLock() {
    return Joi.object({
      enabled: Joi.boolean(),

      defaultOptions: Joi.string(),

      paymentIdentifier: Joi.string(),
    });
  }

  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),

      forceReassignment: Joi.boolean(),
    });
  }

  static AppLogisticsConfig() {
    return Joi.object({
      logisticsBySeller: Joi.boolean(),

      serviceabilityCheck: Joi.boolean(),

      sameDayDelivery: Joi.boolean(),

      dpAssignment: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      enabled: Joi.boolean(),

      autoApply: Joi.boolean(),
    });
  }

  static AppInventoryPartialUpdate() {
    return Joi.object({
      rewardPoints: this.RewardPointsConfig(),

      cart: this.AppCartConfig(),

      payment: this.AppPaymentConfig(),

      loyaltyPoints: this.LoyaltyPoints(),

      commsEnabled: Joi.boolean(),
    });
  }

  static BrandCompanyInfo() {
    return Joi.object({
      companyName: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static CompanyByBrandsRequest() {
    return Joi.object({
      brands: Joi.number(),

      searchText: Joi.string(),
    });
  }

  static CompanyByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandCompanyInfo()),

      page: this.Pagination(),
    });
  }

  static StoreByBrandsRequest() {
    return Joi.object({
      companyId: Joi.number(),

      brands: Joi.number(),

      searchText: Joi.string(),
    });
  }

  static StoreByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandStoreInfo()),

      page: this.Pagination(),
    });
  }

  static BrandStoreInfo() {
    return Joi.object({
      storeName: Joi.string(),

      storeId: Joi.number(),

      storeType: Joi.string(),

      storeCode: Joi.string(),

      storeAddress: this.OptedStoreAddress(),

      company: this.OptedCompany(),
    });
  }

  static CompanyBrandInfo() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.number(),

      brandLogoUrl: Joi.string(),

      brandBannerUrl: Joi.string(),

      brandBannerPortraitUrl: Joi.string(),
    });
  }

  static BrandsByCompanyResponse() {
    return Joi.object({
      brands: this.CompanyBrandInfo(),
    });
  }

  static CreateApplicationRequest() {
    return Joi.object({
      app: this.App(),

      configuration: this.AppInventory(),

      domain: this.AppDomain(),
    });
  }

  static CreateAppResponse() {
    return Joi.object({
      app: this.Application(),

      configuration: this.ApplicationInventory(),
    });
  }

  static ApplicationsResponse() {
    return Joi.object({
      items: Joi.array().items(this.Application()),

      page: this.Pagination(),
    });
  }

  static MobileAppConfiguration() {
    return Joi.object({
      isActive: Joi.boolean(),

      id: Joi.string(),

      appName: Joi.string(),

      landingImage: this.LandingImage(),

      splashImage: this.SplashImage(),

      application: Joi.string(),

      platformType: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),

      packageName: Joi.string(),
    });
  }

  static LandingImage() {
    return Joi.object({
      aspectRatio: Joi.string(),

      secureUrl: Joi.string(),
    });
  }

  static SplashImage() {
    return Joi.object({
      aspectRatio: Joi.string(),

      secureUrl: Joi.string(),
    });
  }

  static MobileAppConfigRequest() {
    return Joi.object({
      appName: Joi.string(),

      landingImage: this.LandingImage(),

      splashImage: this.SplashImage(),

      isActive: Joi.boolean(),
    });
  }

  static BuildVersionHistory() {
    return Joi.object({
      versions: this.BuildVersion(),

      latestAvailableVersionName: Joi.string(),
    });
  }

  static BuildVersion() {
    return Joi.object({
      id: Joi.string(),

      application: Joi.string(),

      platformType: Joi.string(),

      buildStatus: Joi.string(),

      versionName: Joi.string(),

      versionCode: Joi.number(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static AppSupportedCurrency() {
    return Joi.object({
      id: Joi.string(),

      supportedCurrency: Joi.array().items(Joi.string()),

      application: Joi.string(),

      defaultCurrency: this.DefaultCurrency(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),
    });
  }

  static DefaultCurrency() {
    return Joi.object({
      ref: Joi.string(),

      code: Joi.string(),
    });
  }

  static CurrencyConfig() {
    return Joi.object({
      id: Joi.string(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      decimalDigits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static DomainAdd() {
    return Joi.object({
      name: Joi.string(),
    });
  }

  static DomainAddRequest() {
    return Joi.object({
      domain: this.DomainAdd(),
    });
  }

  static DomainsResponse() {
    return Joi.object({
      domains: Joi.array().items(this.Domain()),
    });
  }

  static UpdateDomain() {
    return Joi.object({
      id: Joi.string(),
    });
  }

  static UpdateDomainTypeRequest() {
    return Joi.object({
      domain: this.UpdateDomain(),

      action: Joi.string(),
    });
  }

  static DomainStatusRequest() {
    return Joi.object({
      domainUrl: Joi.string(),
    });
  }

  static DomainStatus() {
    return Joi.object({
      display: Joi.string(),

      status: Joi.boolean(),
    });
  }

  static DomainStatusResponse() {
    return Joi.object({
      connected: Joi.boolean(),

      status: Joi.array().items(this.DomainStatus()),
    });
  }

  static DomainSuggestionsRequest() {
    return Joi.object({
      domainUrl: Joi.string(),

      custom: Joi.boolean(),
    });
  }

  static DomainSuggestion() {
    return Joi.object({
      name: Joi.string(),

      unsupported: Joi.boolean(),

      isAvailable: Joi.boolean(),

      price: Joi.number(),

      currency: Joi.string(),
    });
  }

  static DomainSuggestionsResponse() {
    return Joi.object({
      domains: Joi.array().items(this.DomainSuggestion()),
    });
  }

  static GetIntegrationsOptInsResponse() {
    return Joi.object({
      items: this.IntegrationOptIn(),

      page: this.Pagination(),
    });
  }

  static IntegrationOptIn() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string(),

      descriptionHtml: Joi.string(),

      constants: Joi.string(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string()),

      id: Joi.string(),

      name: Joi.string(),

      meta: this.IntegrationMeta(),

      icon: Joi.string(),

      owner: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      token: Joi.string(),

      secret: Joi.string(),

      v: Joi.number(),
    });
  }

  static Validators() {
    return Joi.object({
      company: this.CompanyValidator(),

      store: this.StoreValidator(),

      inventory: this.InventoryValidator(),

      order: this.OrderValidator(),
    });
  }

  static CompanyValidator() {
    return Joi.object({
      jsonSchema: this.JsonSchema(),

      browserScript: Joi.string(),
    });
  }

  static JsonSchema() {
    return Joi.object({
      display: Joi.string(),

      key: Joi.string(),

      type: Joi.string(),

      tooltip: Joi.string(),
    });
  }

  static StoreValidator() {
    return Joi.object({
      jsonSchema: Joi.array().items(this.JsonSchema()),

      browserScript: Joi.string(),
    });
  }

  static InventoryValidator() {
    return Joi.object({
      jsonSchema: Joi.array().items(this.JsonSchema()),

      browserScript: Joi.string(),
    });
  }

  static OrderValidator() {
    return Joi.object({
      jsonSchema: Joi.array().items(this.JsonSchema()),

      browserScript: Joi.string(),
    });
  }

  static IntegrationMeta() {
    return Joi.object({
      isPublic: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static Integration() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string(),

      descriptionHtml: Joi.string(),

      constants: Joi.object(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string()),

      id: Joi.string(),

      name: Joi.string(),

      meta: this.IntegrationMeta(),

      icon: Joi.string(),

      owner: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      token: Joi.string(),

      secret: Joi.string(),

      v: Joi.number(),
    });
  }

  static IntegrationConfigResponse() {
    return Joi.object({
      items: this.IntegrationLevel(),
    });
  }

  static IntegrationLevel() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.object()),

      lastPatch: Joi.array().items(Joi.object()),

      id: Joi.string(),

      integration: Joi.string(),

      level: Joi.string(),

      uid: Joi.number(),

      meta: Joi.array().items(Joi.any()),

      token: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),

      data: Joi.object(),
    });
  }

  static OptedStoreIntegration() {
    return Joi.object({
      otherOpted: Joi.boolean(),

      otherIntegration: this.IntegrationOptIn(),

      otherEntity: this.OtherEntity(),
    });
  }

  static OtherEntity() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.string()),

      lastPatch: this.LastPatch(),

      id: Joi.string(),

      integration: Joi.string(),

      level: Joi.string(),

      uid: Joi.number(),

      data: this.OtherEntityData(),

      meta: Joi.array().items(Joi.object()),

      token: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static LastPatch() {
    return Joi.object({
      op: Joi.string(),

      path: Joi.string(),

      value: Joi.string(),
    });
  }

  static OtherEntityData() {
    return Joi.object({
      articleIdentifier: Joi.string(),
    });
  }

  static App() {
    return Joi.object({
      companyId: Joi.string(),

      channelType: Joi.string(),

      auth: this.ApplicationAuth(),

      name: Joi.string(),

      desc: Joi.string(),
    });
  }

  static AppInventory() {
    return Joi.object({
      brand: this.InventoryBrandRule(),

      store: this.InventoryStoreRule(),

      image: Joi.array().items(Joi.string()),

      franchiseEnabled: Joi.boolean(),

      outOfStock: Joi.boolean(),

      payment: this.InventoryPaymentConfig(),

      articleAssignment: this.InventoryArticleAssignment(),
    });
  }

  static AppDomain() {
    return Joi.object({
      name: Joi.string(),
    });
  }

  static CompaniesResponse() {
    return Joi.object({
      items: this.AppInventoryCompanies(),

      page: this.Pagination(),
    });
  }

  static AppInventoryCompanies() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),

      companyType: Joi.string(),
    });
  }

  static StoresResponse() {
    return Joi.object({
      items: this.AppInventoryStores(),

      page: this.Pagination(),
    });
  }

  static AppInventoryStores() {
    return Joi.object({
      id: Joi.string(),

      modifiedOn: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      displayName: Joi.string(),

      storeType: Joi.string(),

      storeCode: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static FilterOrderingStoreRequest() {
    return Joi.object({
      allStores: Joi.boolean(),

      deployedStores: Joi.array().items(Joi.number()),

      q: Joi.string(),

      pageNo: Joi.number(),

      pageSize: Joi.number(),
    });
  }

  static DeploymentMeta() {
    return Joi.object({
      deployedStores: Joi.array().items(Joi.number()),

      allStores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      id: Joi.string(),

      app: Joi.string(),

      v: Joi.number(),
    });
  }

  static OrderingStoreConfig() {
    return Joi.object({
      deploymentMeta: this.DeploymentMeta(),
    });
  }

  static OtherSellerCompany() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  }

  static OtherSellerApplication() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      id: Joi.string(),

      domain: Joi.string(),

      company: this.OtherSellerCompany(),

      optType: Joi.string(),
    });
  }

  static OtherSellerApplications() {
    return Joi.object({
      items: Joi.array().items(this.OtherSellerApplication()),

      page: this.Pagination(),
    });
  }

  static OptedApplicationResponse() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      id: Joi.string(),

      domain: Joi.string(),

      company: this.OptedCompany(),

      optedInventory: this.OptedInventory(),

      optOutInventory: this.OptOutInventory(),
    });
  }

  static OptedCompany() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),
    });
  }

  static OptedInventory() {
    return Joi.object({
      optType: this.OptType(),

      items: Joi.any(),
    });
  }

  static OptType() {
    return Joi.object({
      key: Joi.string(),

      display: Joi.string(),
    });
  }

  static OptedStore() {
    return Joi.object({
      name: Joi.string(),

      storeCode: Joi.string(),

      id: Joi.string(),

      modifiedOn: Joi.string(),

      uid: Joi.number(),

      address: this.OptedStoreAddress(),

      displayName: Joi.string(),

      storeType: Joi.string(),

      companyId: Joi.number(),
    });
  }

  static OptOutInventory() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      company: Joi.array().items(Joi.number()),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string()),

      sellerSelection: Joi.boolean(),

      updateProductMeta: Joi.boolean(),

      requestProduct: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      pageType: Joi.string(),

      params: Joi.string(),

      query: Joi.string(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launchPage: this.LaunchPage(),

      continueAsGuest: Joi.boolean(),

      loginBtnText: Joi.string(),

      showDomainTextbox: Joi.boolean(),

      showRegisterBtn: Joi.boolean(),
    });
  }

  static RegistrationPageFeature() {
    return Joi.object({
      askStoreAddress: Joi.boolean(),
    });
  }

  static AppFeature() {
    return Joi.object({
      productDetail: this.ProductDetailFeature(),

      landingPage: this.LandingPageFeature(),

      registrationPage: this.RegistrationPageFeature(),

      homePage: this.HomePageFeature(),

      common: this.CommonFeature(),

      cart: this.CartFeature(),

      qr: this.QrFeature(),

      pcr: this.PcrFeature(),

      order: this.OrderFeature(),

      id: Joi.string(),

      app: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static HomePageFeature() {
    return Joi.object({
      orderProcessing: Joi.boolean(),
    });
  }

  static CommonFeature() {
    return Joi.object({
      communicationOptinDialog: this.CommunicationOptinDialogFeature(),

      deploymentStoreSelection: this.DeploymentStoreSelectionFeature(),

      listingPrice: this.ListingPriceFeature(),

      listingPage: this.ListingPageFeature(),

      currency: this.CurrencyFeature(),

      revenueEngine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compareProducts: this.CompareProductsFeature(),
    });
  }

  static CommunicationOptinDialogFeature() {
    return Joi.object({
      visibility: Joi.boolean(),
    });
  }

  static DeploymentStoreSelectionFeature() {
    return Joi.object({
      enabled: Joi.boolean(),

      type: Joi.string(),
    });
  }

  static ListingPriceFeature() {
    return Joi.object({
      value: Joi.string(),

      sort: Joi.string(),
    });
  }

  static ListingPageFeature() {
    return Joi.object({
      sortOn: Joi.string(),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string()),

      type: Joi.string(),

      defaultCurrency: Joi.string(),
    });
  }

  static RevenueEngineFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static FeedbackFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CompareProductsFeature() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static CartFeature() {
    return Joi.object({
      gstInput: Joi.boolean(),

      staffSelection: Joi.boolean(),

      placingForCustomer: Joi.boolean(),

      googleMap: Joi.boolean(),
    });
  }

  static QrFeature() {
    return Joi.object({
      application: Joi.boolean(),

      products: Joi.boolean(),

      collections: Joi.boolean(),
    });
  }

  static PcrFeature() {
    return Joi.object({
      staffSelection: Joi.boolean(),
    });
  }

  static OrderFeature() {
    return Joi.object({
      buyAgain: Joi.boolean(),
    });
  }

  static AppFeatureRequest() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static AppFeatureResponse() {
    return Joi.object({
      feature: this.AppFeature(),
    });
  }

  static Currency() {
    return Joi.object({
      id: Joi.string(),

      isActive: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      decimalDigits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      isPrimary: Joi.boolean(),

      isDefault: Joi.boolean(),

      isShortlink: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),
    });
  }

  static ApplicationWebsite() {
    return Joi.object({
      enabled: Joi.boolean(),

      basepath: Joi.string(),
    });
  }

  static ApplicationCors() {
    return Joi.object({
      domains: Joi.array().items(Joi.string()),
    });
  }

  static ApplicationAuth() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static ApplicationRedirections() {
    return Joi.object({
      from: Joi.string(),

      redirectTo: Joi.string(),

      type: Joi.string(),
    });
  }

  static ApplicationMeta() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static SecureUrl() {
    return Joi.object({
      secureUrl: Joi.string(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string(),

      channelType: Joi.string(),

      cacheTtl: Joi.number(),

      isInternal: Joi.boolean(),

      isActive: Joi.boolean(),

      id: Joi.string(),

      name: Joi.string(),

      owner: Joi.string(),

      companyId: Joi.number(),

      token: Joi.string(),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      appType: Joi.string(),

      mobileLogo: this.SecureUrl(),

      domain: this.Domain(),
    });
  }

  static NotFound() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnhandledError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InvalidPayloadRequest() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static SuccessMessageResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InventoryBrandRule() {
    return Joi.object({
      criteria: Joi.string(),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static StoreCriteriaRule() {
    return Joi.object({
      companies: Joi.array().items(Joi.number()),

      brands: Joi.array().items(Joi.number()),
    });
  }

  static InventoryStoreRule() {
    return Joi.object({
      criteria: Joi.string(),

      rules: Joi.array().items(this.StoreCriteriaRule()),

      stores: Joi.array().items(Joi.number()),
    });
  }

  static InventoryPaymentConfig() {
    return Joi.object({
      modeOfPayment: Joi.string(),

      source: Joi.string(),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetypeOrder: Joi.array().items(Joi.string()),
    });
  }

  static ArticleAssignmentRule() {
    return Joi.object({
      storePriority: this.StorePriorityRule(),
    });
  }

  static InventoryArticleAssignment() {
    return Joi.object({
      postOrderReassignment: Joi.boolean(),

      enforcedStores: Joi.array().items(Joi.number()),

      rules: this.ArticleAssignmentRule(),
    });
  }

  static CompanyAboutAddress() {
    return Joi.object({
      pincode: Joi.number(),

      address1: Joi.string(),

      address2: Joi.string(),

      city: Joi.string(),

      state: Joi.string(),

      country: Joi.string(),

      addressType: Joi.string(),
    });
  }

  static UserEmail() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      email: Joi.string(),
    });
  }

  static UserPhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      countryCode: Joi.number(),

      phone: Joi.string(),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      socialLinks: this.SocialLinks(),

      links: this.Links(),

      copyrightText: Joi.string(),

      id: Joi.string(),

      businessHighlights: this.BusinessHighlights(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string(),

      addressLine: Joi.array().items(Joi.string()),

      phone: this.InformationPhone(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.number(),
    });
  }

  static InformationPhone() {
    return Joi.object({
      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static InformationSupport() {
    return Joi.object({
      phone: Joi.array().items(Joi.string()),

      email: Joi.array().items(Joi.string()),

      timing: Joi.string(),
    });
  }

  static SocialLinks() {
    return Joi.object({
      facebook: this.Facebook(),

      instagram: this.Instagram(),

      twitter: this.Twitter(),

      pinterest: this.Pinterest(),

      googlePlus: this.GooglePlus(),

      youtube: this.Youtube(),

      linkedIn: this.LinkedIn(),

      vimeo: this.Vimeo(),

      blogLink: this.BlogLink(),
    });
  }

  static Instagram() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Twitter() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Pinterest() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static GooglePlus() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Youtube() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static LinkedIn() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Vimeo() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static BlogLink() {
    return Joi.object({
      title: Joi.string(),

      icon: Joi.string(),

      link: Joi.string(),
    });
  }

  static Links() {
    return Joi.object({
      title: Joi.string(),

      link: Joi.string(),
    });
  }

  static BusinessHighlights() {
    return Joi.object({
      id: Joi.string(),

      title: Joi.string(),

      icon: Joi.string(),

      subTitle: Joi.string(),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      logo: this.SecureUrl(),

      mobileLogo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      banner: this.SecureUrl(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      id: Joi.string(),
    });
  }

  static CurrenciesResponse() {
    return Joi.object({
      items: Joi.array().items(this.Currency()),
    });
  }

  static StoreLatLong() {
    return Joi.object({
      type: Joi.string(),

      coordinates: Joi.array().items(Joi.number()),
    });
  }

  static OptedStoreAddress() {
    return Joi.object({
      state: Joi.string(),

      address1: Joi.string(),

      latLong: this.StoreLatLong(),

      address2: Joi.string(),

      pincode: Joi.number(),

      country: Joi.string(),

      city: Joi.string(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      id: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      displayName: Joi.string(),

      storeType: Joi.string(),

      storeCode: Joi.string(),

      pincode: Joi.number(),

      code: Joi.string(),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Pagination(),

      items: Joi.array().items(this.OrderingStore()),

      deployedStores: Joi.array().items(Joi.number()),

      allStores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      id: Joi.string(),

      app: Joi.string(),

      v: Joi.number(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      id: Joi.string(),

      application: Joi.string(),

      createdAt: Joi.string(),

      updatedAt: Joi.string(),

      v: Joi.number(),
    });
  }

  static Tokens() {
    return Joi.object({
      firebase: this.Firebase(),

      moengage: this.Moengage(),

      segment: this.Segment(),

      gtm: this.Gtm(),

      freshchat: this.Freshchat(),

      safetynet: this.Safetynet(),

      fyndRewards: this.FyndRewards(),

      auth: this.Auth(),

      googleMap: this.GoogleMap(),
    });
  }

  static Firebase() {
    return Joi.object({
      credentials: this.Credentials(),

      enabled: Joi.boolean(),
    });
  }

  static Credentials() {
    return Joi.object({
      ios: this.Ios(),

      android: this.Android(),

      projectId: Joi.string(),

      gcmSenderId: Joi.string(),

      applicationId: Joi.string(),

      apiKey: Joi.string(),
    });
  }

  static Ios() {
    return Joi.object({
      applicationId: Joi.string(),

      apiKey: Joi.string(),
    });
  }

  static Android() {
    return Joi.object({
      applicationId: Joi.string(),

      apiKey: Joi.string(),
    });
  }

  static Moengage() {
    return Joi.object({
      credentials: this.MoengageCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static MoengageCredentials() {
    return Joi.object({
      appId: Joi.string(),
    });
  }

  static Segment() {
    return Joi.object({
      credentials: this.SegmentCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SegmentCredentials() {
    return Joi.object({
      writeKey: Joi.string(),
    });
  }

  static Gtm() {
    return Joi.object({
      credentials: this.GtmCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static GtmCredentials() {
    return Joi.object({
      apiKey: Joi.string(),
    });
  }

  static Freshchat() {
    return Joi.object({
      credentials: this.FreshchatCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static FreshchatCredentials() {
    return Joi.object({
      appId: Joi.string(),

      appKey: Joi.string(),

      webToken: Joi.string(),
    });
  }

  static Safetynet() {
    return Joi.object({
      credentials: this.SafetynetCredentials(),

      enabled: Joi.boolean(),
    });
  }

  static SafetynetCredentials() {
    return Joi.object({
      apiKey: Joi.string(),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      publicKey: Joi.string(),
    });
  }

  static Auth() {
    return Joi.object({
      google: this.Google(),

      facebook: this.Facebook(),

      accountkit: this.Accountkit(),
    });
  }

  static GoogleMap() {
    return Joi.object({
      credentials: this.GoogleMapCredentials(),
    });
  }

  static GoogleMapCredentials() {
    return Joi.object({
      apiKey: Joi.string(),
    });
  }

  static Validation() {
    return Joi.object({
      userRegisteredAfter: Joi.string(),

      anonymous: Joi.boolean(),

      appId: Joi.array().items(Joi.string()),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      createdOn: Joi.string(),

      modifiedOn: Joi.string(),
    });
  }

  static State() {
    return Joi.object({
      isDisplay: Joi.boolean(),

      isArchived: Joi.boolean(),

      isPublic: Joi.boolean(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Rule() {
    return Joi.object({
      max: Joi.number(),

      value: Joi.number(),

      discountQty: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payableCategory: Joi.string(),

      payableBy: Joi.string(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modifiedBy: Joi.string(),

      createdBy: Joi.string(),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      calculateOn: Joi.string(),

      scope: Joi.array().items(Joi.string()),

      autoApply: Joi.boolean(),

      currencyCode: Joi.string(),

      isExact: Joi.boolean(),

      valueType: Joi.string(),

      type: Joi.string(),

      applicableOn: Joi.string(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      codes: Joi.array().items(Joi.string()),

      networks: Joi.array().items(Joi.string()),

      types: Joi.array().items(Joi.string()),

      uses: this.PaymentAllowValue(),
    });
  }

  static PaymentCodes() {
    return Joi.object({
      upi: this.PaymentModes(),

      ps: this.PaymentModes(),

      wl: this.PaymentModes(),

      pl: this.PaymentModes(),

      nb: this.PaymentModes(),

      qr: this.PaymentModes(),

      card: this.PaymentModes(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multiStoreAllowed: Joi.boolean(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      user: Joi.number(),

      total: Joi.number(),

      app: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: this.UsesRemaining(),

      remaining: this.UsesRemaining(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellationAllowed: Joi.boolean(),

      returnAllowed: Joi.boolean(),
    });
  }

  static PriceRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static Restrictions() {
    return Joi.object({
      couponAllowed: Joi.boolean(),

      platforms: Joi.array().items(Joi.string()),

      orderingStores: Joi.array().items(Joi.number()),

      payments: this.PaymentCodes(),

      bulkBundle: this.BulkBundleRestriction(),

      uses: this.UsesRestriction(),

      postOrder: this.PostOrder(),

      priceRange: this.PriceRange(),
    });
  }

  static Identifier() {
    return Joi.object({
      categoryId: Joi.array().items(Joi.number()),

      articleId: Joi.array().items(Joi.string()),

      storeId: Joi.array().items(Joi.number()),

      companyId: Joi.array().items(Joi.number()),

      collectionId: Joi.array().items(Joi.string()),

      userId: Joi.array().items(Joi.string()),

      brandId: Joi.array().items(Joi.number()),

      itemId: Joi.array().items(Joi.number()),
    });
  }

  static DisplayMetaDict() {
    return Joi.object({
      subtitle: Joi.string(),

      title: Joi.string(),
    });
  }

  static DisplayMeta() {
    return Joi.object({
      subtitle: Joi.string(),

      title: Joi.string(),

      description: Joi.string(),

      auto: this.DisplayMetaDict(),

      apply: this.DisplayMetaDict(),

      remove: this.DisplayMetaDict(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      typeSlug: Joi.string(),

      validation: this.Validation(),

      dateMeta: this.CouponDateMeta(),

      state: this.State(),

      validity: this.Validity(),

      rule: Joi.array().items(this.Rule()),

      code: Joi.string(),

      ownership: this.Ownership(),

      schedule: this.Schedule(),

      author: this.CouponAuthor(),

      tags: Joi.array().items(Joi.string()),

      ruleDefinition: this.RuleDefinition(),

      restrictions: this.Restrictions(),

      identifiers: this.Identifier(),

      action: this.Action(),

      displayMeta: this.DisplayMeta(),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      page: this.Pagination(),

      items: this.CouponAdd(),
    });
  }

  static OperationErrorResponse() {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static CouponUpdate() {
    return Joi.object({
      typeSlug: Joi.string(),

      validation: this.Validation(),

      dateMeta: this.CouponDateMeta(),

      state: this.State(),

      validity: this.Validity(),

      rule: Joi.array().items(this.Rule()),

      code: Joi.string(),

      ownership: this.Ownership(),

      schedule: this.Schedule(),

      author: this.CouponAuthor(),

      tags: Joi.array().items(Joi.string()),

      ruleDefinition: this.RuleDefinition(),

      restrictions: this.Restrictions(),

      identifiers: this.Identifier(),

      action: this.Action(),

      displayMeta: this.DisplayMeta(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      schedule: this.Schedule(),

      archive: Joi.boolean(),
    });
  }

  static StoreMapping() {
    return Joi.object({
      enabled: Joi.string(),

      marketplaceStoreId: Joi.string(),

      storeId: Joi.number(),

      meta: Joi.object(),
    });
  }

  static AllChannels() {
    return Joi.object({
      mkpName: Joi.boolean(),
    });
  }

  static MyntraPayload() {
    return Joi.object({
      merchantId: Joi.string(),

      secretKey: Joi.string(),
    });
  }

  static AmazonPayload() {
    return Joi.object({
      sellerId: Joi.string(),

      mwsAuthToken: Joi.string(),
    });
  }

  static FlipkartPayload() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static TatacliqPayload() {
    return Joi.object({
      userName: Joi.string(),

      password: Joi.string(),

      merchantId: Joi.string(),
    });
  }

  static AjioPayload() {
    return Joi.object({
      username: Joi.string(),

      password: Joi.string(),

      clientIp: Joi.string(),
    });
  }

  static StoreMappingPayload() {
    return Joi.object({
      storeMappingEnabled: Joi.boolean(),

      storeMapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static StatusPayload() {
    return Joi.object({
      isActive: Joi.boolean(),
    });
  }

  static StatusResp() {
    return Joi.object({
      isActive: Joi.boolean(),
    });
  }

  static SyncPayload() {
    return Joi.object({
      modifiedSince: Joi.string(),
    });
  }

  static SyncResp() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static MkpResp() {
    return Joi.object({
      marketplace: Joi.string(),

      worker: Joi.number(),

      workerAssigned: Joi.string(),

      isActive: Joi.boolean(),

      storeMappingEnabled: Joi.boolean(),

      companyId: Joi.number(),

      configuration: Joi.object(),

      storeMapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static StatGroup() {
    return Joi.object({
      key: Joi.string(),

      url: Joi.string(),

      title: Joi.string(),
    });
  }

  static StatsGroups() {
    return Joi.object({
      groups: Joi.array().items(this.StatGroup()),
    });
  }

  static StatsGroupComponent() {
    return Joi.object({
      key: Joi.string(),

      url: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      filters: Joi.object(),
    });
  }

  static StatsGroupComponents() {
    return Joi.object({
      title: Joi.string(),

      components: Joi.array().items(this.StatsGroupComponent()),
    });
  }

  static StatsRes() {
    return Joi.object({
      key: Joi.string(),

      title: Joi.string(),

      type: Joi.string(),

      data: Joi.object(),
    });
  }

  static ReceivedAt() {
    return Joi.object({
      value: Joi.string(),
    });
  }

  static AbandonCartsDetail() {
    return Joi.object({
      propertiesCartId: Joi.string(),

      contextTraitsFirstName: Joi.string(),

      contextTraitsLastName: Joi.string(),

      contextTraitsPhoneNumber: Joi.string(),

      contextTraitsEmail: Joi.string(),

      contextAppApplicationId: Joi.string(),

      propertiesBreakupValuesRawTotal: Joi.string(),

      receivedAt: this.ReceivedAt(),
    });
  }

  static AbdCartPage() {
    return Joi.object({
      type: Joi.string(),

      size: Joi.string(),

      current: Joi.string(),

      hasNext: Joi.string(),

      itemTotal: Joi.string(),
    });
  }

  static AbandonCartsList() {
    return Joi.object({
      items: Joi.array().items(this.AbandonCartsDetail()),

      cartTotal: Joi.string(),

      page: this.AbdCartPage(),
    });
  }

  static AbandonCartDetail() {
    return Joi.object({
      id: Joi.string(),

      userId: Joi.string(),

      cartValue: Joi.string(),

      articles: Joi.array().items(Joi.object()),

      breakup: Joi.object(),

      address: Joi.object(),
    });
  }

  static ExportJobReq() {
    return Joi.object({
      marketplaceName: Joi.string(),

      startTime: Joi.string(),

      endTime: Joi.string(),

      eventType: Joi.string(),
    });
  }

  static ExportJobRes() {
    return Joi.object({
      status: Joi.string(),

      jobId: Joi.string(),
    });
  }

  static ExportJobStatusRes() {
    return Joi.object({
      status: Joi.string(),

      jobId: Joi.string(),

      downloadUrl: Joi.string(),
    });
  }

  static GetLogsListReq() {
    return Joi.object({
      marketplaceName: Joi.string(),

      startDate: Joi.string(),

      companyId: Joi.string(),

      endDate: Joi.string(),
    });
  }

  static MkpLogsResp() {
    return Joi.object({
      startTimeIso: Joi.string(),

      endTimeIso: Joi.string(),

      eventType: Joi.string(),

      traceId: Joi.string(),

      count: Joi.string(),

      status: Joi.string(),
    });
  }

  static LogsPage() {
    return Joi.object({
      type: Joi.string(),

      size: Joi.string(),

      current: Joi.string(),

      hasNext: Joi.string(),

      itemTotal: Joi.string(),
    });
  }

  static GetLogsListRes() {
    return Joi.object({
      items: Joi.array().items(this.MkpLogsResp()),

      page: this.LogsPage(),
    });
  }

  static SearchLogReq() {
    return Joi.object({
      marketplaceName: Joi.string(),

      startDate: Joi.string(),

      companyId: Joi.string(),

      endDate: Joi.string(),

      identifier: Joi.string(),

      identifierValue: Joi.string(),
    });
  }

  static LogInfo() {
    return Joi.object({
      id: Joi.string(),

      status: Joi.string(),

      eventType: Joi.string(),

      marketplaceName: Joi.string(),

      event: Joi.string(),

      traceId: Joi.string(),

      companyId: Joi.number(),

      brandId: Joi.number(),

      storeCode: Joi.string(),

      storeId: Joi.number(),

      itemId: Joi.number(),

      articleId: Joi.string(),

      sellerIdentifier: Joi.string(),
    });
  }

  static SearchLogRes() {
    return Joi.object({
      items: Joi.array().items(this.LogInfo()),

      page: this.LogsPage(),
    });
  }
}

class LeadValidator {
  static getTickets() {
    return Joi.object({
      companyId: Joi.string().required(),
      items: Joi.boolean(),
      filters: Joi.boolean(),
      q: Joi.string(),
      status: Joi.string(),
      priority: Joi.string(),
      category: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createTicket() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.AddTicketPayload().required(),
    }).required();
  }

  static getTicket() {
    return Joi.object({
      companyId: Joi.string().required(),
      ticketId: Joi.string().required(),
    }).required();
  }

  static editTicket() {
    return Joi.object({
      companyId: Joi.string().required(),
      ticketId: Joi.string().required(),
      body: Validator.EditTicketPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      companyId: Joi.string().required(),
      ticketId: Joi.string().required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      companyId: Joi.string().required(),
      ticketId: Joi.string().required(),
    }).required();
  }
}

class PaymentValidator {
  static getAllPayouts() {
    return Joi.object({
      companyId: Joi.number().required(),
      uniqueExternalId: Joi.string(),
    }).required();
  }

  static savePayout() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static updatePayout() {
    return Joi.object({
      companyId: Joi.number().required(),
      uniqueTransferNo: Joi.string().required(),
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static activateAndDectivatePayout() {
    return Joi.object({
      companyId: Joi.number().required(),
      uniqueTransferNo: Joi.string().required(),
      body: Validator.UpdatePayoutRequest().required(),
    }).required();
  }

  static deletePayout() {
    return Joi.object({
      companyId: Joi.number().required(),
      uniqueTransferNo: Joi.string().required(),
    }).required();
  }

  static getSubscriptionPaymentMethod() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      companyId: Joi.number().required(),
      uniqueExternalId: Joi.string().required(),
      paymentMethodId: Joi.string().required(),
    }).required();
  }

  static getSubscriptionConfig() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static saveSubscriptionSetupIntent() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }
}

class OrderValidator {
  static shipmentStatusUpdate() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.UpdateShipmentStatusBody().required(),
    }).required();
  }

  static activityStatus() {
    return Joi.object({
      companyId: Joi.string().required(),
      bagId: Joi.string().required(),
    }).required();
  }

  static storeProcessShipmentUpdate() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.UpdateProcessShipmenstRequestBody().required(),
    }).required();
  }

  static getOrdersByCompanyId() {
    return Joi.object({
      companyId: Joi.string().required(),
      pageNo: Joi.string(),
      pageSize: Joi.string(),
      fromDate: Joi.string(),
      toDate: Joi.string(),
      q: Joi.string(),
      stage: Joi.string(),
      salesChannels: Joi.string(),
      orderId: Joi.string(),
      stores: Joi.string(),
      status: Joi.string(),
      shortenUrls: Joi.boolean(),
      filterType: Joi.string(),
    }).required();
  }

  static getPing() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static voiceCallback() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static voiceClickToCall() {
    return Joi.object({
      companyId: Joi.string().required(),
      caller: Joi.string().required(),
      receiver: Joi.string().required(),
    }).required();
  }
}

class CatalogValidator {
  static getProductBundle() {
    return Joi.object({
      companyId: Joi.string().required(),
      q: Joi.string(),
    }).required();
  }

  static createProductBundle() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.ProductBundleRequest().required(),
    }).required();
  }

  static getProductBundleDetail() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
    }).required();
  }

  static updateProductBundle() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
      body: Validator.ProductBundleUpdateRequest().required(),
    }).required();
  }

  static getSizeGuides() {
    return Joi.object({
      companyId: Joi.string().required(),
      active: Joi.boolean(),
      q: Joi.string(),
      tag: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createSizeGuide() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSizeGuide() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
    }).required();
  }

  static updateSizeGuide() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSellerInsights() {
    return Joi.object({
      companyId: Joi.string().required(),
      sellerAppId: Joi.string().required(),
    }).required();
  }

  static createMarketplaceOptin() {
    return Joi.object({
      companyId: Joi.number().required(),
      marketplace: Joi.string().required(),
      body: Validator.OptInPostRequest().required(),
    }).required();
  }

  static getMarketplaceOptinDetail() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static getCompanyDetail() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static getCompanyBrandDetail() {
    return Joi.object({
      companyId: Joi.number().required(),
      isActive: Joi.boolean(),
      q: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      marketplace: Joi.string(),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static getStoreDetail() {
    return Joi.object({
      companyId: Joi.number().required(),
      q: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static listProductTemplateCategories() {
    return Joi.object({
      companyId: Joi.string().required(),
      departments: Joi.string().required(),
      itemType: Joi.string().required(),
    }).required();
  }

  static listDepartmentsData() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static getDepartmentData() {
    return Joi.object({
      companyId: Joi.string().required(),
      uid: Joi.string().required(),
    }).required();
  }

  static listProductTemplate() {
    return Joi.object({
      companyId: Joi.string().required(),
      departments: Joi.string().required(),
    }).required();
  }

  static validateProductTemplate() {
    return Joi.object({
      companyId: Joi.string().required(),
      slug: Joi.string().required(),
    }).required();
  }

  static downloadProductTemplateViews() {
    return Joi.object({
      companyId: Joi.string().required(),
      slug: Joi.string().required(),
    }).required();
  }

  static downloadProductTemplateView() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemType: Joi.string().required(),
    }).required();
  }

  static validateProductTemplateSchema() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemType: Joi.string().required(),
    }).required();
  }

  static listHSNCodes() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static listProductTemplateExportDetails() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static listTemplateBrandTypeValues() {
    return Joi.object({
      companyId: Joi.string().required(),
      filter: Joi.string().required(),
    }).required();
  }

  static listCategories() {
    return Joi.object({
      companyId: Joi.string().required(),
      level: Joi.string(),
      q: Joi.string(),
    }).required();
  }

  static createCategories() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static getCategoryData() {
    return Joi.object({
      companyId: Joi.string().required(),
      uid: Joi.string().required(),
    }).required();
  }

  static updateCategory() {
    return Joi.object({
      companyId: Joi.string().required(),
      uid: Joi.string().required(),
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static getProducts() {
    return Joi.object({
      companyId: Joi.number().required(),
      brandIds: Joi.number(),
      categoryIds: Joi.number(),
      search: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createProduct() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static getProduct() {
    return Joi.object({
      itemCode: Joi.string(),
      companyId: Joi.number().required(),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static editProduct() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemId: Joi.number().required(),
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static deleteProduct() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemId: Joi.number().required(),
    }).required();
  }

  static getProductValidation() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static getProductSize() {
    return Joi.object({
      itemCode: Joi.string(),
      companyId: Joi.number().required(),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static getProductBulkUploadHistory() {
    return Joi.object({
      companyId: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateProductAssetsInBulk() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.BulkJob().required(),
    }).required();
  }

  static deleteProductBulkJob() {
    return Joi.object({
      companyId: Joi.string().required(),
      batchId: Joi.number().required(),
    }).required();
  }

  static createProductsInBulk() {
    return Joi.object({
      companyId: Joi.number().required(),
      batchId: Joi.string().required(),
      body: Validator.BulkProductRequest().required(),
    }).required();
  }

  static getCompanyTags() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static getProductAssetsInBulk() {
    return Joi.object({
      companyId: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createProductAssetsInBulk() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.ProductBulkAssets().required(),
    }).required();
  }

  static deleteSize() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemId: Joi.number().required(),
      size: Joi.number().required(),
    }).required();
  }

  static getInventory() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemId: Joi.string().required(),
      size: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static addInventory() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemId: Joi.number().required(),
      size: Joi.string().required(),
      body: Validator.InventoryRequest1().required(),
    }).required();
  }

  static deleteInventory() {
    return Joi.object({
      companyId: Joi.string().required(),
      itemId: Joi.number().required(),
      locationId: Joi.number().required(),
    }).required();
  }

  static getInventoryBulkUploadHistory() {
    return Joi.object({
      companyId: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createBulkInventoryJob() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.BulkJob().required(),
    }).required();
  }

  static deleteBulkInventoryJob() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static createBulkInventory() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.InventoryBulkRequest().required(),
    }).required();
  }

  static getInventoryExport() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static createInventoryExportJob() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.InventoryExportRequest().required(),
    }).required();
  }

  static exportInventoryConfig() {
    return Joi.object({
      companyId: Joi.string().required(),
      filterType: Joi.string(),
    }).required();
  }
}

class CompanyProfileValidator {
  static updateCompany() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.CompanyStoreSerializerRequest().required(),
    }).required();
  }

  static cbsOnboardGet() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static editBrand() {
    return Joi.object({
      companyId: Joi.string().required(),
      brandId: Joi.string().required(),
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static getBrand() {
    return Joi.object({
      companyId: Joi.string().required(),
      brandId: Joi.string().required(),
    }).required();
  }

  static createBrand() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static createBrand() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.CompanyBrandPostRequestSerializer().required(),
    }).required();
  }

  static getBrands() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static createLocation() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocations() {
    return Joi.object({
      companyId: Joi.string().required(),
      storeType: Joi.string(),
      q: Joi.string(),
      stage: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateLocation() {
    return Joi.object({
      companyId: Joi.string().required(),
      locationId: Joi.string().required(),
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocationDetail() {
    return Joi.object({
      companyId: Joi.string().required(),
      locationId: Joi.string().required(),
    }).required();
  }
}

class AssetsValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().required(),
      companyId: Joi.number().required(),
      body: Validator.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().required(),
      companyId: Joi.number().required(),
      body: Validator.StartResponse().required(),
    }).required();
  }

  static getSignUrls() {
    return Joi.object({
      companyId: Joi.number().required(),
      body: Validator.SignUrlRequest().required(),
    }).required();
  }

  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      companyId: Joi.number().required(),
      body: Validator.BulkRequest().required(),
    }).required();
  }

  static browse() {
    return Joi.object({
      namespace: Joi.string().required(),
      companyId: Joi.number().required(),
    }).required();
  }

  static proxy() {
    return Joi.object({
      companyId: Joi.number().required(),
      url: Joi.string().required(),
    }).required();
  }
}

class InventoryValidator {
  static getJobsByCompany() {
    return Joi.object({
      companyId: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateJob() {
    return Joi.object({
      companyId: Joi.number().required(),
      xUserData: Joi.string(),
      body: Validator.JobConfigDTO().required(),
    }).required();
  }

  static createJob() {
    return Joi.object({
      companyId: Joi.number().required(),
      xUserData: Joi.string(),
      body: Validator.JobConfigDTO().required(),
    }).required();
  }

  static getJobByCompanyAndIntegration() {
    return Joi.object({
      companyId: Joi.number().required(),
      integrationId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getJobConfigDefaults() {
    return Joi.object({
      companyId: Joi.number().required(),
    }).required();
  }

  static getJobByCode() {
    return Joi.object({
      companyId: Joi.number().required(),
      code: Joi.string().required(),
    }).required();
  }

  static getJobCodesByCompanyAndIntegration() {
    return Joi.object({
      companyId: Joi.number().required(),
      integrationId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

class ConfigurationValidator {
  static createApplication() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.CreateApplicationRequest().required(),
    }).required();
  }

  static getApplications() {
    return Joi.object({
      companyId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.object(),
    }).required();
  }

  static getCurrencies() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static getDomainAvailibility() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.DomainSuggestionsRequest().required(),
    }).required();
  }

  static getIntegrationById() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.number().required(),
    }).required();
  }

  static getAvailableOptIns() {
    return Joi.object({
      companyId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getSelectedOptIns() {
    return Joi.object({
      companyId: Joi.string().required(),
      level: Joi.string().required(),
      uid: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getIntegrationLevelConfig() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
      level: Joi.string().required(),
    }).required();
  }

  static getIntegrationByLevelId() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
      level: Joi.string().required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getLevelActiveIntegrations() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
      level: Joi.string().required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getBrandsByCompany() {
    return Joi.object({
      companyId: Joi.string().required(),
      q: Joi.string(),
    }).required();
  }

  static getCompanyByBrands() {
    return Joi.object({
      companyId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.CompanyByBrandsRequest().required(),
    }).required();
  }

  static getStoreByBrands() {
    return Joi.object({
      companyId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.StoreByBrandsRequest().required(),
    }).required();
  }

  static getOtherSellerApplications() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static getOtherSellerApplicationById() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
    }).required();
  }

  static optOutFromApplication() {
    return Joi.object({
      companyId: Joi.string().required(),
      id: Joi.string().required(),
      body: Validator.OptOutInventory().required(),
    }).required();
  }
}

class MarketplacesValidator {
  static getAvailableChannels() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static getChannels() {
    return Joi.object({
      companyId: Joi.string().required(),
    }).required();
  }

  static getChannel() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
    }).required();
  }

  static registerMyntraChannel() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.MyntraPayload().required(),
    }).required();
  }

  static updateMyntraChannelCredentials() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.MyntraPayload().required(),
    }).required();
  }

  static registerAmazonChannel() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.AmazonPayload().required(),
    }).required();
  }

  static updateAmazonChannelCredentials() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.AmazonPayload().required(),
    }).required();
  }

  static registerFlipkartChannel() {
    return Joi.object({
      companyId: Joi.string().required(),
      flipkartChannel: Joi.string().required(),
      body: Validator.FlipkartPayload().required(),
    }).required();
  }

  static updateFlipkartChannelCredentials() {
    return Joi.object({
      companyId: Joi.string().required(),
      flipkartChannel: Joi.string().required(),
      body: Validator.FlipkartPayload().required(),
    }).required();
  }

  static registerTatacliqChannel() {
    return Joi.object({
      companyId: Joi.string().required(),
      tatacliqChannel: Joi.string().required(),
      body: Validator.TatacliqPayload().required(),
    }).required();
  }

  static updateTatacliqChannelCredentials() {
    return Joi.object({
      companyId: Joi.string().required(),
      tatacliqChannel: Joi.string().required(),
      body: Validator.TatacliqPayload().required(),
    }).required();
  }

  static registerAjioChannel() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.AjioPayload().required(),
    }).required();
  }

  static updateAjioChannelCredentials() {
    return Joi.object({
      companyId: Joi.string().required(),
      body: Validator.AjioPayload().required(),
    }).required();
  }

  static updateChannelInventoryConfig() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
      validateCred: Joi.string(),
      body: Validator.InventoryConfig().required(),
    }).required();
  }

  static getChannelLocationConfig() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
    }).required();
  }

  static updateChannelLocationConfig() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
      body: Validator.StoreMappingPayload().required(),
    }).required();
  }

  static getChannelStatus() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
    }).required();
  }

  static updateChannelStatus() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
      body: Validator.StatusPayload().required(),
    }).required();
  }

  static triggerChannelInventoryUpdates() {
    return Joi.object({
      companyId: Joi.string().required(),
      channel: Joi.string().required(),
      updateType: Joi.string().required(),
      body: Validator.SyncPayload().required(),
    }).required();
  }
}

class AnalyticsValidator {
  static createExportJob() {
    return Joi.object({
      companyId: Joi.string().required(),
      exportType: Joi.string().required(),
      body: Validator.ExportJobReq().required(),
    }).required();
  }

  static getExportJobStatus() {
    return Joi.object({
      companyId: Joi.string().required(),
      exportType: Joi.string().required(),
      jobId: Joi.string().required(),
    }).required();
  }

  static getLogsList() {
    return Joi.object({
      companyId: Joi.string().required(),
      logType: Joi.string().required(),
      pageNo: Joi.string(),
      pageSize: Joi.string(),
      body: Validator.GetLogsListReq().required(),
    }).required();
  }

  static searchLogs() {
    return Joi.object({
      companyId: Joi.string().required(),
      pageNo: Joi.string(),
      pageSize: Joi.string(),
      logType: Joi.string().required(),
      body: Validator.SearchLogReq().required(),
    }).required();
  }
}

module.exports = {
  LeadValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  AssetsValidator,
  InventoryValidator,
  ConfigurationValidator,
  MarketplacesValidator,
  AnalyticsValidator,
};
