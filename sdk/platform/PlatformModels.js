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
      item_total: Joi.number(),

      next_id: Joi.string(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().required(),

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
      slug: Joi.string().required(),

      title: Joi.string().required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string(),

      header_image: Joi.string(),

      should_notify: Joi.boolean(),

      success_message: Joi.string(),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditCustomFormPayload() {
    return Joi.object({
      title: Joi.string().required(),

      inputs: Joi.array().items(Joi.object()).required(),

      description: Joi.string(),

      header_image: Joi.string(),

      should_notify: Joi.boolean(),

      login_required: Joi.boolean(),

      success_message: Joi.string(),

      poll_for_assignment: this.PollForAssignment(),
    });
  }

  static EditTicketPayload() {
    return Joi.object({
      content: this.TicketContent(),

      category: Joi.string(),

      source: Joi.string(),

      status: Joi.string(),

      priority: Joi.string(),

      assigned_to: this.AgentChangePayload(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static AgentChangePayload() {
    return Joi.object({
      agent_id: Joi.string().required(),
    });
  }

  static CreateVideoRoomResponse() {
    return Joi.object({
      unique_name: Joi.string().required(),
    });
  }

  static CloseVideoRoomResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static CreateVideoRoomPayload() {
    return Joi.object({
      unique_name: Joi.string().required(),

      notify: Joi.array().items(Joi.object()),
    });
  }

  static Filter() {
    return Joi.object({
      priorities: Joi.array().items(this.Priority()).required(),

      categories: Joi.array().items(this.TicketCategory()),

      statuses: Joi.array().items(this.Status()).required(),

      assignees: Joi.array().items(Joi.object()).required(),
    });
  }

  static TicketHistoryPayload() {
    return Joi.object({
      value: Joi.object().required(),

      type: Joi.string().required(),
    });
  }

  static CustomFormSubmissionPayload() {
    return Joi.object({
      response: Joi.array().items(this.KeyValue()).required(),
    });
  }

  static KeyValue() {
    return Joi.object({
      key: Joi.string().required(),

      value: Joi.string().required(),
    });
  }

  static GetTokenForVideoRoomResponse() {
    return Joi.object({
      access_token: Joi.string().required(),
    });
  }

  static GetParticipantsInsideVideoRoomResponse() {
    return Joi.object({
      participants: Joi.array().items(this.Participant()).required(),
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
      first_name: Joi.string(),

      last_name: Joi.string(),

      phone_numbers: Joi.array().items(this.PhoneNumber()),

      emails: Joi.array().items(this.Email()),

      gender: Joi.string(),

      active: Joi.boolean(),

      profile_pic_url: Joi.string(),

      username: Joi.string(),

      account_type: Joi.string(),

      uid: Joi.string(),

      debug: this.Debug(),

      has_old_password_hash: Joi.boolean(),

      _id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static PhoneNumber() {
    return Joi.object({
      active: Joi.boolean(),

      primary: Joi.boolean(),

      verified: Joi.boolean(),

      phone: Joi.string(),

      country_code: Joi.number(),
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
      ticket: this.Ticket().required(),
    });
  }

  static TicketContext() {
    return Joi.object({
      application_id: Joi.string(),

      company_id: Joi.string().required(),
    });
  }

  static CreatedOn() {
    return Joi.object({
      user_agent: Joi.string().required(),
    });
  }

  static TicketAsset() {
    return Joi.object({
      display: Joi.string(),

      value: Joi.string().required(),

      type: Joi.string().required(),
    });
  }

  static TicketContent() {
    return Joi.object({
      title: Joi.string().required(),

      description: Joi.string(),

      attachments: Joi.array().items(this.TicketAsset()),
    });
  }

  static AddTicketPayload() {
    return Joi.object({
      status: Joi.string().required(),

      priority: Joi.string().required(),

      category: Joi.string().required(),

      content: this.TicketContent().required(),
    });
  }

  static Priority() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      color: Joi.string().required(),
    });
  }

  static Status() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      color: Joi.string().required(),
    });
  }

  static TicketCategory() {
    return Joi.object({
      key: Joi.string().required(),

      display: Joi.string().required(),

      form: this.CustomForm(),
    });
  }

  static SubmitButton() {
    return Joi.object({
      title: Joi.string().required(),

      title_color: Joi.string().required(),

      background_color: Joi.string().required(),
    });
  }

  static PollForAssignment() {
    return Joi.object({
      duration: Joi.number().required(),

      message: Joi.string().required(),

      success_message: Joi.string().required(),

      failure_message: Joi.string().required(),
    });
  }

  static CustomForm() {
    return Joi.object({
      application_id: Joi.string().required(),

      slug: Joi.string().required(),

      header_image: Joi.string(),

      title: Joi.string().required(),

      description: Joi.string(),

      login_required: Joi.boolean().required(),

      should_notify: Joi.boolean().required(),

      success_message: Joi.string(),

      submit_button: this.SubmitButton(),

      inputs: Joi.array().items(Joi.object()).required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      poll_for_assignment: this.PollForAssignment(),

      _id: Joi.string().required(),
    });
  }

  static TicketHistory() {
    return Joi.object({
      type: Joi.string().required(),

      value: Joi.object().required(),

      ticket_id: Joi.string().required(),

      created_on: this.CreatedOn(),

      created_by: Joi.object(),

      _id: Joi.string().required(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static Ticket() {
    return Joi.object({
      context: this.TicketContext(),

      created_on: this.CreatedOn(),

      response_id: Joi.string(),

      content: this.TicketContent(),

      ticket_id: Joi.string().required(),

      category: this.TicketCategory().required(),

      source: Joi.string().required(),

      status: this.Status().required(),

      priority: this.Priority().required(),

      created_by: Joi.object(),

      assigned_to: Joi.object(),

      tags: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      _id: Joi.string(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static Activity() {
    return Joi.object({
      current_state: Joi.object(),

      document_id: Joi.string(),

      previous_state: Joi.object(),
    });
  }

  static ActivityDump() {
    return Joi.object({
      activity: this.Activity(),

      created_by: this.CreatedBy(),

      date_meta: this.DateMeta(),

      id: Joi.string(),

      type: Joi.string(),
    });
  }

  static AddMediaListRequest() {
    return Joi.object({
      entity_id: Joi.string(),

      entity_type: Joi.string(),

      media_list: Joi.array().items(this.AddMediaRequest()),

      ref_id: Joi.string(),

      ref_type: Joi.string(),
    });
  }

  static AddMediaRequest() {
    return Joi.object({
      cloud_id: Joi.string(),

      cloud_name: Joi.string(),

      cloud_provider: Joi.string(),

      entity_id: Joi.string(),

      entity_type: Joi.string(),

      media_url: Joi.string(),

      ref_id: Joi.string(),

      ref_type: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      thumbnail_url: Joi.string(),

      type: Joi.string(),
    });
  }

  static ApproveRequest() {
    return Joi.object({
      approve: Joi.boolean(),

      entity_type: Joi.string(),

      id: Joi.string().required(),

      reason: Joi.string(),
    });
  }

  static Attribute() {
    return Joi.object({
      date_meta: this.DateMeta(),

      description: Joi.string(),

      id: Joi.string(),

      name: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static AttributeObject() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string().required(),

      slug: Joi.string(),

      title: Joi.string(),

      type: Joi.string().required(),

      value: Joi.number().required(),
    });
  }

  static CreatedBy() {
    return Joi.object({
      id: Joi.string(),

      name: Joi.string(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static CursorGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static DateMeta() {
    return Joi.object({
      created_on: Joi.string(),

      modified_on: Joi.string(),
    });
  }

  static DeviceMeta() {
    return Joi.object({
      app_version: Joi.string(),

      platform: Joi.string(),
    });
  }

  static Entity() {
    return Joi.object({
      id: Joi.string(),

      type: Joi.string(),
    });
  }

  static EntityRequest() {
    return Joi.object({
      entity_id: Joi.string(),

      entity_type: Joi.string(),
    });
  }

  static FeedbackAttributes() {
    return Joi.object({
      items: Joi.array().items(this.Attribute()),

      page: this.Page(),
    });
  }

  static FeedbackError() {
    return Joi.object({
      code: Joi.object(),

      exception: Joi.string(),

      info: Joi.string(),

      message: Joi.string(),

      meta: Joi.object(),

      request_id: Joi.string(),

      stack_trace: Joi.string(),

      status: Joi.number(),
    });
  }

  static FeedbackState() {
    return Joi.object({
      active: Joi.boolean(),

      archive: Joi.boolean(),

      media: Joi.string(),

      qna: Joi.boolean(),

      rating: Joi.boolean(),

      review: Joi.boolean(),
    });
  }

  static GetResponse() {
    return Joi.object({
      data: Joi.object(),

      page: this.Page(),
    });
  }

  static GetReviewResponse() {
    return Joi.object({
      facets: Joi.array().items(this.ReviewFacet()),

      items: Joi.array().items(Joi.object()),

      page: this.Page(),

      sort: Joi.array().items(this.SortMethod()),
    });
  }

  static InsertResponse() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static MediaMeta() {
    return Joi.object({
      max_count: Joi.number(),

      size: Joi.number(),

      type: Joi.string(),
    });
  }

  static MediaMetaRequest() {
    return Joi.object({
      max_count: Joi.number().required(),

      size: Joi.number().required(),
    });
  }

  static NumberGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static PageCursor() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      next_id: Joi.string(),

      size: Joi.number().required(),

      type: Joi.string().required(),
    });
  }

  static PageNumber() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      type: Joi.string(),
    });
  }

  static Rating() {
    return Joi.object({
      attributes: Joi.array().items(this.Attribute()),

      attributes_slugs: Joi.array().items(Joi.string()),

      ui: this.UI(),
    });
  }

  static RatingRequest() {
    return Joi.object({
      attributes: Joi.array().items(Joi.string()).required(),

      ui: this.UI(),
    });
  }

  static ReportAbuseRequest() {
    return Joi.object({
      description: Joi.string(),

      entity_id: Joi.string().required(),

      entity_type: Joi.string().required(),
    });
  }

  static Review() {
    return Joi.object({
      description: Joi.string(),

      header: Joi.string(),

      image_meta: this.MediaMeta(),

      title: Joi.string(),

      video_meta: this.MediaMeta(),

      vote_allowed: Joi.boolean(),
    });
  }

  static ReviewFacet() {
    return Joi.object({
      display: Joi.string(),

      name: Joi.string(),

      selected: Joi.boolean(),

      slug: Joi.string(),

      type: Joi.string(),
    });
  }

  static ReviewRequest() {
    return Joi.object({
      description: Joi.string().required(),

      header: Joi.string().required(),

      image_meta: this.MediaMetaRequest().required(),

      is_vote_allowed: Joi.boolean().required(),

      title: Joi.string().required(),

      video_meta: this.MediaMetaRequest().required(),
    });
  }

  static SaveAttributeRequest() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string().required(),

      slug: Joi.string().required(),
    });
  }

  static SortMethod() {
    return Joi.object({
      name: Joi.string(),

      selected: Joi.boolean(),

      type: Joi.string(),
    });
  }

  static TagMeta() {
    return Joi.object({
      media: Joi.array().items(this.MediaMeta()),

      name: Joi.string(),

      type: Joi.string(),
    });
  }

  static Template() {
    return Joi.object({
      date_meta: this.DateMeta(),

      entity: this.Entity(),

      id: Joi.string(),

      name: Joi.string(),

      rating: this.Rating(),

      review: this.Review(),

      state: this.FeedbackState(),

      tags: Joi.array().items(this.TagMeta()),
    });
  }

  static TemplateGetResponse() {
    return Joi.object({
      items: Joi.array().items(this.Template()),

      page: this.Page(),
    });
  }

  static TemplateRequest() {
    return Joi.object({
      active: Joi.boolean().required(),

      enable_media_type: Joi.string(),

      enable_qna: Joi.boolean(),

      enable_rating: Joi.boolean().required(),

      enable_review: Joi.boolean().required(),

      entity: this.EntityRequest().required(),

      rating: this.RatingRequest().required(),

      review: this.ReviewRequest().required(),
    });
  }

  static TemplateRequestList() {
    return Joi.object({
      template_list: Joi.array().items(this.TemplateRequest()).required(),
    });
  }

  static UI() {
    return Joi.object({
      feedback_question: Joi.array().items(Joi.string()),

      icon: this.UIIcon(),

      text: Joi.array().items(Joi.string()),

      type: Joi.string(),
    });
  }

  static UIIcon() {
    return Joi.object({
      active: Joi.string(),

      inactive: Joi.string(),

      selected: Joi.array().items(Joi.string()),
    });
  }

  static UpdateAttributeRequest() {
    return Joi.object({
      description: Joi.string(),

      name: Joi.string().required(),

      slug: Joi.string(),
    });
  }

  static UpdateResponse() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static UpdateReviewRequest() {
    return Joi.object({
      active: Joi.boolean(),

      application: Joi.string(),

      approve: Joi.boolean(),

      archive: Joi.boolean(),

      attributes_rating: Joi.array().items(this.AttributeObject()),

      description: Joi.string(),

      device_meta: this.DeviceMeta(),

      entity_id: Joi.string(),

      entity_type: Joi.string(),

      media_resource: Joi.array().items(this.MediaMeta()),

      rating: Joi.number(),

      review_id: Joi.string(),

      template_id: Joi.string(),

      title: Joi.string(),
    });
  }

  static UpdateTemplateRequest() {
    return Joi.object({
      active: Joi.boolean().required(),

      enable_media_type: Joi.string(),

      enable_qna: Joi.boolean(),

      enable_rating: Joi.boolean().required(),

      enable_review: Joi.boolean().required(),

      entity: this.EntityRequest().required(),

      rating: this.RatingRequest().required(),

      review: this.ReviewRequest().required(),
    });
  }

  static UpdateTemplateStatusRequest() {
    return Joi.object({
      active: Joi.boolean(),

      archive: Joi.boolean(),
    });
  }

  static PaginationSchema() {
    return Joi.object({
      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),

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
      theme_id: Joi.string(),
    });
  }

  static UpgradableThemeSchema() {
    return Joi.object({
      parent_theme: Joi.string(),

      applied_theme: Joi.string(),

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

      last_modified: Joi.string(),

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

      created_at: Joi.string(),

      updated_at: Joi.string(),

      version: Joi.string(),

      parent_theme_version: Joi.string(),

      parent_theme: Joi.string(),

      information: this.Information(),

      tags: Joi.array().items(Joi.string()),

      src: this.Src(),

      assets: this.AssetsSchema(),

      available_pages: this.AvailablePages(),

      available_sections: Joi.array().items(this.availableSectionSchema()),

      sections: Joi.array().items(this.sectionSchema()),

      constants: Joi.object(),

      styles: Joi.object(),

      config: this.Config(),

      settings: Joi.object(),

      font: this.Font(),

      _id: Joi.string(),

      __v: Joi.number(),

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
      page_key: Joi.string(),

      page_sections: this.PageSections(),
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
      umd_js: this.UmdJs(),

      common_js: this.CommonJs(),

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

  static Config() {
    return Joi.object({
      preset: this.Preset(),

      global_schema: this.GlobalSchema(),

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
      bg_color: Joi.string(),

      primary_color: Joi.string(),

      secondary_color: Joi.string(),

      accent_color: Joi.string(),

      link_color: Joi.string(),

      button_secondary_color: Joi.string(),
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

      semi_bold: this.SemiBold(),

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

      exact_url: Joi.string(),

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

      country_code: Joi.string(),

      phone: Joi.string(),

      primary: Joi.boolean(),
    });
  }

  static EditMobileRequestSchema() {
    return Joi.object({
      country_code: Joi.string(),

      phone: Joi.string(),
    });
  }

  static EditProfileRequestSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      mobile: Joi.string(),

      email: Joi.string(),

      gender: Joi.string(),

      dob: Joi.string(),

      profile_pic_url: Joi.string(),

      android_hash: Joi.string(),

      sender: Joi.string(),

      register_token: Joi.string(),
    });
  }

  static SendEmailOtpRequestSchema() {
    return Joi.object({
      email: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      register_token: Joi.string(),
    });
  }

  static VerifyOtpRequestSchema() {
    return Joi.object({
      request_id: Joi.string(),

      register_token: Joi.string(),

      otp: Joi.string(),
    });
  }

  static SendMobileOtpRequestSchema() {
    return Joi.object({
      mobile: Joi.string(),

      country_code: Joi.string(),

      action: Joi.string(),

      token: Joi.string(),

      android_hash: Joi.string(),

      force: Joi.string(),
    });
  }

  static UpdatePasswordRequestSchema() {
    return Joi.object({
      old_password: Joi.string(),

      new_password: Joi.string(),
    });
  }

  static FormRegisterRequestSchema() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      password: Joi.string(),

      phone: this.FormRegisterRequestSchemaPhone(),

      register_token: Joi.string(),
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

      captcha_code: Joi.string(),
    });
  }

  static PasswordLoginRequestSchema() {
    return Joi.object({
      captcha_code: Joi.string(),

      password: Joi.string(),

      username: Joi.string(),
    });
  }

  static SendOtpRequestSchema() {
    return Joi.object({
      country_code: Joi.string(),

      captcha_code: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchema() {
    return Joi.object({
      is_signed_in: Joi.boolean(),

      oauth2: this.OAuthRequestSchemaOauth2(),

      profile: this.OAuthRequestSchemaProfile(),
    });
  }

  static AuthSuccess() {
    return Joi.object({
      register_token: Joi.string(),

      user_exists: Joi.boolean(),

      user: this.AuthSuccessUser(),
    });
  }

  static SendOtpResponse() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
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

      user_exists: Joi.boolean(),
    });
  }

  static ResetPasswordSuccess() {
    return Joi.object({
      status: Joi.string(),
    });
  }

  static RegisterFormSuccess() {
    return Joi.object({
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
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
      resend_timer: Joi.number(),

      resend_token: Joi.string(),

      success: Joi.boolean(),

      request_id: Joi.string(),

      message: Joi.string(),

      mobile: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static EmailOtpSuccess() {
    return Joi.object({
      resend_token: Joi.string(),
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

      verify_mobile_link: Joi.boolean(),
    });
  }

  static VerifyEmailOTPSuccess() {
    return Joi.object({
      user: this.UserSchema(),

      verify_email_link: Joi.boolean(),
    });
  }

  static SendMobileVerifyLinkSuccess() {
    return Joi.object({
      verify_mobile_link: Joi.boolean(),
    });
  }

  static SendEmailVerifyLinkSuccess() {
    return Joi.object({
      verify_email_link: Joi.boolean(),
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

      verify_email_otp: Joi.boolean(),

      verify_email_link: Joi.boolean(),

      verify_mobile_otp: Joi.boolean(),

      user: Joi.string(),

      register_token: Joi.string(),

      user_exists: Joi.boolean(),
    });
  }

  static FormRegisterRequestSchemaPhone() {
    return Joi.object({
      country_code: Joi.string(),

      mobile: Joi.string(),
    });
  }

  static OAuthRequestSchemaOauth2() {
    return Joi.object({
      access_token: Joi.string(),

      expiry: Joi.number(),

      refresh_token: Joi.string(),
    });
  }

  static OAuthRequestSchemaProfile() {
    return Joi.object({
      last_name: Joi.string(),

      image: Joi.string(),

      id: Joi.string(),

      email: Joi.string(),

      full_name: Joi.string(),

      first_name: Joi.string(),
    });
  }

  static AuthSuccessUser() {
    return Joi.object({
      first_name: Joi.string(),

      last_name: Joi.string(),

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

      look_and_feel: this.LookAndFeel(),

      updated_at: Joi.string(),

      active: Joi.boolean(),

      forgot_password: Joi.boolean(),

      login: this.Login(),

      skip_captcha: Joi.boolean(),

      name: Joi.string(),

      meta: this.MetaSchema(),

      _id: Joi.string(),

      social: this.Social(),

      required_fields: this.RequiredFields(),

      register_required_fields: this.RegisterRequiredFields(),

      skip_login: Joi.boolean(),

      flash_card: this.FlashCard(),

      subtext: Joi.string(),

      social_tokens: this.SocialTokens(),

      created_at: Joi.string(),

      register: Joi.boolean(),

      mobile_image: Joi.string(),

      desktop_image: Joi.string(),
    });
  }

  static LookAndFeel() {
    return Joi.object({
      card_position: Joi.string(),

      background_color: Joi.string(),
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
      fynd_default: Joi.boolean(),
    });
  }

  static Social() {
    return Joi.object({
      account_kit: Joi.boolean(),

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
      is_required: Joi.boolean(),

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
      is_required: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static RegisterRequiredFieldsMobile() {
    return Joi.object({
      is_required: Joi.boolean(),

      level: Joi.string(),
    });
  }

  static FlashCard() {
    return Joi.object({
      text: Joi.string(),

      text_color: Joi.string(),

      background_color: Joi.string(),
    });
  }

  static SocialTokens() {
    return Joi.object({
      facebook: this.Facebook(),

      account_kit: this.Accountkit(),

      google: this.Google(),
    });
  }

  static Facebook() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static Accountkit() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static Google() {
    return Joi.object({
      app_id: Joi.string(),
    });
  }

  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string(),

      tnc: Joi.string(),

      policy: Joi.string(),

      shipping: Joi.string(),

      faq: Joi.array().items(this.ApplicationLegalFAQ()),

      _id: Joi.string(),

      updated_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),
    });
  }

  static SeoComponent() {
    return Joi.object({
      seo: this.SeoSchema(),
    });
  }

  static SeoSchema() {
    return Joi.object({
      app: Joi.string(),

      _id: Joi.string(),

      robots_txt: Joi.string(),

      sitemap_enabled: Joi.boolean(),

      custom_meta_tags: Joi.array().items(Joi.object()),

      details: Joi.object(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string(),

      content: Joi.string(),

      _id: Joi.string(),
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

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string(),

      type: Joi.string(),
    });
  }

  static EditorMeta() {
    return Joi.object({
      foreground_color: Joi.string(),

      background_color: Joi.string(),

      content_type: Joi.string(),

      content: Joi.string(),
    });
  }

  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string(),

      modified_by: Joi.string(),
    });
  }

  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string(),

      platforms: Joi.array().items(Joi.string()),

      title: Joi.string(),

      announcement: Joi.string(),

      pages: Joi.array().items(this.AnnouncementPageSchema()),

      editor_meta: this.EditorMeta(),

      author: this.AnnouncementAuthorSchema(),

      created_at: Joi.string(),

      app: Joi.string(),

      modified_at: Joi.string(),

      _schedule: this.ScheduleSchema(),
    });
  }

  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),

      next_schedule: Joi.array().items(Joi.object()),
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
      page_slug: Joi.array().items(Joi.object()),
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

      page: this.Page(),
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
      aspect_ratio: Joi.string(),

      id: Joi.string(),

      secure_url: Joi.string(),
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
      _id: Joi.string(),

      _custom_json: Joi.object(),

      application: Joi.string(),

      archived: Joi.boolean(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),

      title: Joi.string(),

      date_meta: this.DateMeta(),
    });
  }

  static SEO() {
    return Joi.object({
      description: Joi.string(),

      image: this.SEOImage(),

      title: Joi.string(),
    });
  }

  static SEOImage() {
    return Joi.object({
      url: Joi.string(),
    });
  }

  static BlogRequest() {
    return Joi.object({
      application: Joi.string(),

      _custom_json: Joi.object(),

      author: Joi.object(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      seo: this.SEO(),

      _schedule: this.CronSchedule(),
    });
  }

  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(this.AdminAnnouncementSchema()),

      page: this.Page(),
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

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string(),

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

      en_us: this.Language(),
    });
  }

  static Language() {
    return Joi.object({
      display: Joi.string(),
    });
  }

  static Action() {
    return Joi.object({
      page: this.ActionPage(),

      popup: this.ActionPage(),

      type: Joi.string(),
    });
  }

  static ActionPage() {
    return Joi.object({
      params: Joi.object(),

      query: Joi.object(),

      url: Joi.string(),

      type: Joi.string(),
    });
  }

  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      _locale_language: this.LocaleLanguage(),

      image: Joi.string(),

      type: Joi.string(),

      action: this.Action(),

      active: Joi.boolean(),

      display: Joi.string(),

      sort_order: Joi.number(),

      sub_navigation: this.NavigationReference(),
    });
  }

  static LandingPage() {
    return Joi.object({
      data: this.LandingPageSchema(),

      success: Joi.boolean(),
    });
  }

  static ConfigurationSchema() {
    return Joi.object({
      sleep_time: Joi.number(),

      start_on_launch: Joi.boolean(),

      duration: Joi.number(),

      slide_direction: Joi.string(),
    });
  }

  static SlideshowMedia() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),

      bg_color: Joi.string(),

      duration: Joi.number(),

      auto_decide_duration: Joi.boolean(),

      action: this.Action(),
    });
  }

  static Slideshow() {
    return Joi.object({
      data: this.SlideshowSchema(),

      success: Joi.boolean(),
    });
  }

  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object(),

      refresh_rate: Joi.number(),

      refresh_pages: Joi.array().items(Joi.string()),
    });
  }

  static AnnouncementDataSchema() {
    return Joi.object({
      page_slug: Joi.string(),

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

      url: Joi.string(),

      type: Joi.string(),

      sub_type: Joi.string(),

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

      sub_type: Joi.string(),

      _id: Joi.string(),

      type: Joi.string(),

      url: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
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

      request_id: Joi.string(),

      stack_trace: Joi.string(),

      meta: Joi.object(),
    });
  }

  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),

      _id: Joi.string(),

      slug: Joi.string(),

      title: Joi.string(),

      application: Joi.string(),
    });
  }

  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string(),

      answer: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      _id: Joi.string(),
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

      title: Joi.string(),

      description: Joi.string(),

      children: this.ChildrenSchema(),

      _id: Joi.string(),

      slug: Joi.string(),

      application: Joi.string(),

      icon_url: Joi.string(),

      _custom_json: Joi.object(),
    });
  }

  static FaqSchema() {
    return Joi.object({
      slug: Joi.string(),

      application: Joi.string(),

      _id: Joi.string(),

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

  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: this.FAQCategorySchema(),
    });
  }

  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string(),

      action: this.Action(),

      platform: Joi.array().items(Joi.string()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      _custom_json: Joi.object(),
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

      page: this.Page(),
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
      _id: Joi.string(),

      application: Joi.string(),

      archived: Joi.boolean(),

      name: Joi.string(),

      slug: Joi.string(),

      platform: Joi.array().items(Joi.string()),

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      orientation: this.Orientation(),

      version: Joi.number(),

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
      _id: Joi.string(),

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

      created_by: this.CreatedBySchema(),

      date_meta: this.DateMeta(),

      _schedule: this.ScheduleSchema(),
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
      _id: Joi.string(),

      title: Joi.string(),

      slug: Joi.string(),

      reading_time: Joi.string(),

      application: Joi.string(),

      description: Joi.string(),

      feature_image: this.FeatureImage(),

      published: Joi.boolean(),

      archived: Joi.boolean(),

      tags: Joi.array().items(Joi.string()),

      content: this.ContentSchema(),

      author: this.Author(),

      _schedule: this.ScheduleSchema(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      _custom_json: Joi.object(),
    });
  }

  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string(),
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

      page: this.Page(),
    });
  }

  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.object()),
    });
  }

  static PageSpecParam() {
    return Joi.object({
      key: Joi.string(),

      required: Joi.boolean(),
    });
  }

  static PageSpecItem() {
    return Joi.object({
      page_type: Joi.string(),

      display_name: Joi.string(),

      params: Joi.array().items(this.PageSpecParam()),

      query: Joi.array().items(this.PageSpecParam()),
    });
  }

  static PageSchema() {
    return Joi.object({
      _id: Joi.string(),

      application: Joi.string(),

      component_ids: Joi.array().items(Joi.string()),

      content: Joi.array().items(this.PageContent()),

      created_by: Joi.object(),

      date_meta: Joi.object(),

      description: Joi.string(),

      feature_image: Joi.object(),

      page_meta: Joi.array().items(this.PageMeta()),

      _schedule: this.ScheduleSchema(),

      _custom_json: Joi.object(),

      orientation: Joi.string(),

      platform: Joi.string(),

      published: Joi.boolean(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      title: Joi.string(),

      type: Joi.string(),

      seo: this.SEO(),

      visibility: Joi.object(),
    });
  }

  static CreatedBySchema() {
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
      _schedule: this.CronSchedule(),

      application: Joi.string(),

      author: Joi.object(),

      _custom_json: Joi.object(),

      orientation: Joi.string(),

      content: Joi.array().items(this.ResourceContent()),

      feature_image: Joi.object(),

      published: Joi.boolean(),

      reading_time: Joi.string(),

      slug: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      seo: this.SEO(),

      title: Joi.string(),
    });
  }

  static CronSchedule() {
    return Joi.object({
      cron: Joi.string(),

      start: Joi.string(),

      end: Joi.string(),

      duration: Joi.number(),
    });
  }

  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  static PageMetaSchema() {
    return Joi.object({
      system_pages: Joi.array().items(Joi.object()),

      custom_pages: Joi.array().items(Joi.object()),

      application_id: Joi.string(),
    });
  }

  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(Joi.object()),

      page: this.Page(),
    });
  }

  static SlideshowSchema() {
    return Joi.object({
      _id: Joi.string(),

      slug: Joi.string(),

      date_meta: this.DateMeta(),

      application: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: Joi.array().items(this.SlideshowMedia()),

      active: Joi.boolean(),

      archived: Joi.boolean(),

      _custom_json: Joi.object(),
    });
  }

  static SlideshowRequest() {
    return Joi.object({
      slug: Joi.string(),

      platform: Joi.string(),

      configuration: this.ConfigurationSchema(),

      media: this.SlideshowMedia(),

      active: Joi.boolean(),
    });
  }

  static Support() {
    return Joi.object({
      created: Joi.boolean(),

      _id: Joi.string(),

      config_type: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      contact: this.ContactSchema(),
    });
  }

  static PhoneProperties() {
    return Joi.object({
      key: Joi.string(),

      code: Joi.string(),

      number: Joi.string(),
    });
  }

  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),

      phone: Joi.array().items(this.PhoneProperties()),
    });
  }

  static EmailProperties() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),

      email: Joi.array().items(this.EmailProperties()),
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

      _id: Joi.string(),

      tags: Joi.array().items(this.TagSchema()),
    });
  }

  static TagSchema() {
    return Joi.object({
      name: Joi.string(),

      url: Joi.string(),

      type: Joi.string(),

      sub_type: Joi.string(),

      _id: Joi.string(),

      position: Joi.string(),

      attributes: Joi.object(),

      content: Joi.string(),
    });
  }

  static UnauthenticatedUser() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static UnauthenticatedApplication() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static BadRequest() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ResourceNotFound() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static InternalServerError() {
    return Joi.object({
      message: Joi.string(),

      code: Joi.string(),
    });
  }

  static PlanRecurring() {
    return Joi.object({
      interval: Joi.string(),

      interval_count: Joi.number(),
    });
  }

  static Plan() {
    return Joi.object({
      recurring: this.PlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string(),

      tag_lines: Joi.array().items(Joi.string()),

      currency: Joi.string(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      type: Joi.string(),

      country: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      amount: Joi.number(),

      product_suite_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
    });
  }

  static DetailedPlanComponents() {
    return Joi.object({
      name: Joi.string(),

      slug: Joi.string(),

      description: Joi.string(),

      group: Joi.string(),

      icon: Joi.string(),

      links: Joi.object(),

      enabled: Joi.boolean(),

      display_text: Joi.string(),
    });
  }

  static DetailedPlan() {
    return Joi.object({
      recurring: this.PlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string(),

      tag_lines: Joi.array().items(Joi.string()),

      currency: Joi.string(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      type: Joi.string(),

      country: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      amount: Joi.number(),

      product_suite_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      components: Joi.array().items(this.DetailedPlanComponents()),
    });
  }

  static InvoiceDetailsPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static InvoiceDetailsClient() {
    return Joi.object({
      address_lines: Joi.array().items(Joi.string()),

      name: Joi.string(),

      email: Joi.string(),

      phone: Joi.string(),
    });
  }

  static InvoiceDetailsStatusTrail() {
    return Joi.object({
      _id: Joi.string(),

      value: Joi.string(),

      timestamp: Joi.string(),
    });
  }

  static InvoiceDetailsPaymentMethodsDataChecks() {
    return Joi.object({
      cvc_check: Joi.string(),

      address_line1_check: Joi.string(),

      address_postal_code_check: Joi.string(),
    });
  }

  static InvoiceDetailsPaymentMethodsDataNetworks() {
    return Joi.object({
      available: Joi.array().items(Joi.string()),

      preferred: Joi.string(),
    });
  }

  static InvoiceDetailsPaymentMethodsDataThreeDSecureUsage() {
    return Joi.object({
      supported: Joi.boolean(),
    });
  }

  static InvoiceDetailsPaymentMethodsData() {
    return Joi.object({
      brand: Joi.string(),

      last4: Joi.string(),

      checks: this.InvoiceDetailsPaymentMethodsDataChecks(),

      wallet: Joi.string(),

      country: Joi.string(),

      funding: Joi.string(),

      exp_year: Joi.number(),

      networks: this.InvoiceDetailsPaymentMethodsDataNetworks(),

      exp_month: Joi.number(),

      fingerprint: Joi.string(),

      generated_from: Joi.string(),

      three_d_secure_usage: this.InvoiceDetailsPaymentMethodsDataThreeDSecureUsage(),
    });
  }

  static InvoiceDetailsPaymentMethods() {
    return Joi.object({
      id: Joi.number(),

      type: Joi.string(),

      pg_payment_method_id: Joi.string(),

      data: this.InvoiceDetailsPaymentMethodsData(),

      is_default: Joi.boolean(),
    });
  }

  static InvoicePaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string(),
    });
  }

  static InvoiceDetails() {
    return Joi.object({
      period: this.InvoiceDetailsPeriod(),

      client: this.InvoiceDetailsClient(),

      auto_advance: Joi.boolean(),

      currency: Joi.string(),

      paid: Joi.boolean(),

      attemp: Joi.number(),

      _id: Joi.string(),

      collection_method: Joi.string(),

      subscriber_id: Joi.string(),

      invoice_url: Joi.string(),

      number: Joi.string(),

      pg_data: Joi.object(),

      receipt_number: Joi.string(),

      statement_descriptor: Joi.string(),

      current_status: Joi.string(),

      status_trail: Joi.array().items(this.InvoiceDetailsStatusTrail()),

      subtotal: Joi.number(),

      total: Joi.number(),

      subscription: Joi.string(),

      next_action_time: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      hash_identifier: Joi.string(),

      payment_method: this.InvoicePaymentMethod(),
    });
  }

  static InvoiceItemsPlanRecurring() {
    return Joi.object({
      interval: Joi.string(),

      interval_count: Joi.number(),
    });
  }

  static InvoiceItemsPlan() {
    return Joi.object({
      recurring: this.InvoiceItemsPlanRecurring(),

      is_trial_plan: Joi.boolean(),

      plan_group: Joi.string(),

      tag_lines: Joi.array().items(Joi.string()),

      currency: Joi.string(),

      is_active: Joi.boolean(),

      is_visible: Joi.boolean(),

      trial_period: Joi.number(),

      addons: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.string()),

      type: Joi.string(),

      country: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      amount: Joi.number(),

      product_suite_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
    });
  }

  static InvoiceItemsPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static InvoiceItems() {
    return Joi.object({
      _id: Joi.string(),

      currency: Joi.string(),

      plan: this.InvoiceItemsPlan(),

      name: Joi.string(),

      quantity: Joi.number(),

      description: Joi.string(),

      period: this.InvoiceItemsPeriod(),

      unit_amount: Joi.number(),

      amount: Joi.number(),

      type: Joi.string(),

      invoice_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
    });
  }

  static Invoice() {
    return Joi.object({
      invoice: this.InvoiceDetails(),

      invoice_items: Joi.array().items(this.InvoiceItems()),
    });
  }

  static InvoicesDataClient() {
    return Joi.object({
      name: Joi.string(),

      email: Joi.string(),

      phone: Joi.string(),

      address_lines: Joi.array().items(Joi.string()),
    });
  }

  static InvoicesDataPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static InvoicesDataPaymentMethod() {
    return Joi.object({
      pg_payment_method_id: Joi.string(),
    });
  }

  static InvoicesData() {
    return Joi.object({
      _id: Joi.string(),

      client: this.InvoicesDataClient(),

      auto_advance: Joi.boolean(),

      currency: Joi.string(),

      paid: Joi.boolean(),

      attemp: Joi.number(),

      collection_method: Joi.string(),

      subscriber_id: Joi.string(),

      invoice_url: Joi.string(),

      number: Joi.string(),

      pg_data: Joi.object(),

      period: this.InvoicesDataPeriod(),

      receipt_number: Joi.string(),

      statement_descriptor: Joi.string(),

      current_status: Joi.string(),

      status_trail: Joi.array().items(this.InvoiceDetailsStatusTrail()),

      subtotal: Joi.number(),

      total: Joi.number(),

      subscription: Joi.string(),

      next_action_time: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      hash_identifier: Joi.string(),

      payment_method: this.InvoicesDataPaymentMethod(),

      invoice_items: Joi.array().items(this.InvoiceItems()),
    });
  }

  static Invoices() {
    return Joi.object({
      data: Joi.array().items(this.InvoicesData()),

      start: Joi.number(),

      end: Joi.number(),

      limit: Joi.number(),

      page: Joi.number(),

      total: Joi.number(),
    });
  }

  static Phone() {
    return Joi.object({
      phone_number: Joi.string(),

      phone_country_code: Joi.string(),
    });
  }

  static SubscriptionBillingAddress() {
    return Joi.object({
      country: Joi.string(),

      state: Joi.string(),

      city: Joi.string(),

      line1: Joi.string(),

      line2: Joi.string(),

      postal_code: Joi.string(),
    });
  }

  static SubscriptionCustomer() {
    return Joi.object({
      phone: this.Phone(),

      billing_address: this.SubscriptionBillingAddress(),

      _id: Joi.string(),

      unique_id: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      email: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      data: Joi.object(),
    });
  }

  static SubscriptionCustomerCreate() {
    return Joi.object({
      phone: this.Phone(),

      billing_address: this.SubscriptionBillingAddress(),

      unique_id: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      email: Joi.string(),
    });
  }

  static SubscriptionCurrentPeriod() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static SubscriptionPauseCollection() {
    return Joi.object({
      behavior: Joi.string(),

      resume_at: Joi.string(),
    });
  }

  static SubscriptionTrial() {
    return Joi.object({
      start: Joi.string(),

      end: Joi.string(),
    });
  }

  static SubscriptionInvoiceSettings() {
    return Joi.object({
      generation: Joi.boolean(),

      charging: Joi.boolean(),
    });
  }

  static Subscription() {
    return Joi.object({
      current_period: this.SubscriptionCurrentPeriod(),

      pause_collection: this.SubscriptionPauseCollection(),

      trial: this.SubscriptionTrial(),

      invoice_settings: this.SubscriptionInvoiceSettings(),

      is_active: Joi.boolean(),

      cancel_at_period_end: Joi.boolean(),

      _id: Joi.string(),

      subscriber_id: Joi.string(),

      plan_id: Joi.string(),

      product_suite_id: Joi.string(),

      plan_data: this.Plan(),

      current_status: Joi.string(),

      collection_method: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),

      latest_invoice: Joi.string(),
    });
  }

  static SubscriptionStatus() {
    return Joi.object({
      is_enabled: Joi.boolean(),

      subscription: this.Subscription(),
    });
  }

  static SubscriptionLimitApplication() {
    return Joi.object({
      enabled: Joi.boolean(),

      hard_limit: Joi.number(),

      soft_limit: Joi.number(),
    });
  }

  static SubscriptionLimitMarketplace() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static SubscriptionLimitOtherPlatform() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static SubscriptionLimitTeam() {
    return Joi.object({
      limit: Joi.number(),
    });
  }

  static SubscriptionLimitProducts() {
    return Joi.object({
      bulk: Joi.boolean(),

      limit: Joi.number(),
    });
  }

  static SubscriptionLimitExtensions() {
    return Joi.object({
      enabled: Joi.boolean(),

      limit: Joi.number(),
    });
  }

  static SubscriptionLimitIntegrations() {
    return Joi.object({
      enabled: Joi.boolean(),

      limit: Joi.number(),
    });
  }

  static SubscriptionLimit() {
    return Joi.object({
      application: this.SubscriptionLimitApplication(),

      marketplace: this.SubscriptionLimitMarketplace(),

      other_platform: this.SubscriptionLimitOtherPlatform(),

      team: this.SubscriptionLimitTeam(),

      products: this.SubscriptionLimitProducts(),

      extensions: this.SubscriptionLimitExtensions(),

      integrations: this.SubscriptionLimitIntegrations(),

      is_trial_plan: Joi.boolean(),
    });
  }

  static SubscriptionActivateReq() {
    return Joi.object({
      unique_id: Joi.string(),

      type: Joi.string(),

      product_suite: Joi.string(),

      plan_id: Joi.string(),

      payment_method: Joi.string(),
    });
  }

  static SubscriptionActivateRes() {
    return Joi.object({
      success: Joi.boolean(),

      data: this.Subscription(),
    });
  }

  static CancelSubscriptionReq() {
    return Joi.object({
      unique_id: Joi.string(),

      type: Joi.string(),

      product_suite: Joi.string(),

      subscription_id: Joi.string(),
    });
  }

  static CancelSubscriptionRes() {
    return Joi.object({
      success: Joi.boolean(),

      data: this.Subscription(),
    });
  }

  static StatsImported() {
    return Joi.object({
      count: Joi.number(),
    });
  }

  static StatsProcessedEmail() {
    return Joi.object({
      success: Joi.number(),

      failed: Joi.number(),

      suppressed: Joi.number(),
    });
  }

  static StatsProcessedSms() {
    return Joi.object({
      success: Joi.number(),

      failed: Joi.number(),

      suppressed: Joi.number(),
    });
  }

  static StatsProcessed() {
    return Joi.object({
      email: this.StatsProcessedEmail(),

      sms: this.StatsProcessedSms(),
    });
  }

  static Stats() {
    return Joi.object({
      _id: Joi.string(),

      imported: Joi.any(),

      processed: Joi.any(),
    });
  }

  static GetStats() {
    return Joi.object({
      items: Joi.array().items(this.Stats()),
    });
  }

  static CampaignReq() {
    return Joi.object({
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      is_active: Joi.boolean(),

      name: Joi.string(),

      file_url: Joi.string(),

      type: Joi.string(),

      records_count: Joi.number(),

      application: Joi.string(),
    });
  }

  static RecipientHeaders() {
    return Joi.object({
      email: Joi.string(),
    });
  }

  static CampaignEmailTemplate() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static CampignEmailProvider() {
    return Joi.object({
      _id: Joi.string(),

      from_name: Joi.string(),

      from_email: Joi.string(),
    });
  }

  static CampaignEmail() {
    return Joi.object({
      template: this.CampaignEmailTemplate(),

      provider: this.CampignEmailProvider(),
    });
  }

  static Campaign() {
    return Joi.object({
      recipient_headers: this.RecipientHeaders(),

      email: this.CampaignEmail(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      datasource: Joi.string(),

      type: Joi.string(),

      name: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static Campaigns() {
    return Joi.object({
      items: Joi.array().items(this.Campaign()),

      page: this.Page(),
    });
  }

  static BigqueryHeadersReq() {
    return Joi.object({
      query: Joi.string(),

      type: Joi.string(),
    });
  }

  static BigqueryHeadersResHeaders() {
    return Joi.object({
      name: Joi.string(),

      type: Joi.string(),
    });
  }

  static BigqueryHeadersRes() {
    return Joi.object({
      headers: Joi.array().items(this.BigqueryHeadersResHeaders()),
    });
  }

  static GetNRecordsCsvReq() {
    return Joi.object({
      url: Joi.string(),

      header: Joi.boolean(),

      count: Joi.number(),
    });
  }

  static GetNRecordsCsvResItems() {
    return Joi.object({
      phone_number: Joi.string(),

      email: Joi.string(),

      firstname: Joi.string(),

      lastname: Joi.string(),

      orderid: Joi.string(),
    });
  }

  static GetNRecordsCsvRes() {
    return Joi.object({
      items: Joi.array().items(this.GetNRecordsCsvResItems()),
    });
  }

  static AudienceReq() {
    return Joi.object({
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      is_active: Joi.boolean(),

      name: Joi.string(),

      file_url: Joi.string(),

      type: Joi.string(),

      records_count: Joi.number(),

      application: Joi.string(),
    });
  }

  static Audience() {
    return Joi.object({
      description: Joi.string(),

      tags: Joi.array().items(Joi.string()),

      headers: Joi.array().items(Joi.string()),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      file_url: Joi.string(),

      type: Joi.string(),

      records_count: Joi.number(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static Audiences() {
    return Joi.object({
      items: Joi.array().items(this.Audience()),

      page: this.Page(),
    });
  }

  static EmailProviderReqFrom() {
    return Joi.object({
      name: Joi.string(),

      email: Joi.string(),

      is_default: Joi.boolean(),
    });
  }

  static EmailProviderReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      api_key: Joi.string(),

      type: Joi.string(),

      provider: Joi.string(),

      from: Joi.array().items(this.EmailProviderReqFrom()),
    });
  }

  static EmailProvider() {
    return Joi.object({
      type: Joi.string(),

      provider: Joi.string(),

      from: Joi.array().items(this.EmailProviderReqFrom()),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      api_key: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static EmailProviders() {
    return Joi.object({
      items: Joi.array().items(this.EmailProvider()),

      page: this.Page(),
    });
  }

  static EmailTemplateDeleteSuccessRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static EmailTemplateDeleteFailureRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static EmailTemplateKeys() {
    return Joi.object({
      to: Joi.string(),

      cc: Joi.string(),

      bcc: Joi.string(),
    });
  }

  static EmailTemplateHeaders() {
    return Joi.object({
      key: Joi.string(),

      value: Joi.string(),
    });
  }

  static EmailTemplateReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      keys: this.EmailTemplateKeys(),

      from: Joi.string(),

      static_to: Joi.array().items(Joi.string()),

      static_cc: Joi.array().items(Joi.string()),

      static_bcc: Joi.array().items(Joi.string()),

      reply_to: Joi.string(),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string(),
    });
  }

  static TemplateAndType() {
    return Joi.object({
      template_type: Joi.string(),

      template: Joi.string(),
    });
  }

  static EmailTemplateRes() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      static_to: Joi.array().items(Joi.string()),

      static_cc: Joi.array().items(Joi.string()),

      static_bcc: Joi.array().items(Joi.string()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      keys: this.EmailTemplateKeys(),

      from: Joi.string(),

      reply_to: Joi.string(),

      headers: Joi.array().items(this.EmailTemplateHeaders()),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static EmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      static_to: Joi.array().items(Joi.any()),

      static_cc: Joi.array().items(Joi.any()),

      static_bcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      from: Joi.string(),

      from_name: Joi.string(),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SystemEmailTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      static_to: Joi.array().items(Joi.any()),

      static_cc: Joi.array().items(Joi.any()),

      static_bcc: Joi.array().items(Joi.any()),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      from: Joi.string(),

      from_name: Joi.string(),

      subject: this.TemplateAndType(),

      html: this.TemplateAndType(),

      text: this.TemplateAndType(),

      headers: Joi.array().items(Joi.any()),

      attachments: Joi.array().items(Joi.any()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static EmailTemplates() {
    return Joi.object({
      items: Joi.array().items(this.EmailTemplate()),

      page: this.Page(),
    });
  }

  static SystemEmailTemplates() {
    return Joi.object({
      items: Joi.array().items(this.SystemEmailTemplate()),

      page: this.Page(),
    });
  }

  static EventSubscriptionTemplateSms() {
    return Joi.object({
      subscribed: Joi.boolean(),

      template: Joi.string(),
    });
  }

  static EventSubscriptionTemplateEmail() {
    return Joi.object({
      subscribed: Joi.boolean(),

      template: Joi.string(),
    });
  }

  static EventSubscriptionTemplate() {
    return Joi.object({
      sms: this.EventSubscriptionTemplateSms(),

      email: this.EventSubscriptionTemplateEmail(),
    });
  }

  static EventSubscription() {
    return Joi.object({
      template: this.EventSubscriptionTemplate(),

      is_default: Joi.boolean(),

      _id: Joi.string(),

      application: Joi.string(),

      event: Joi.string(),

      slug: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static EventSubscriptions() {
    return Joi.object({
      items: Joi.array().items(this.EventSubscription()),

      page: this.Page(),
    });
  }

  static TriggerJobResponse() {
    return Joi.object({
      status: Joi.number(),
    });
  }

  static TriggerJobRequest() {
    return Joi.object({
      job_id: Joi.string(),
    });
  }

  static Job() {
    return Joi.object({
      completed: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      campaign: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static Jobs() {
    return Joi.object({
      items: Joi.array().items(any),

      page: this.Page(),
    });
  }

  static JobLog() {
    return Joi.object({
      imported: Joi.any(),

      processed: Joi.any(),

      _id: Joi.string(),

      job: Joi.string(),

      campaign: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static JobLogs() {
    return Joi.object({
      items: Joi.array().items(this.JobLog()),

      page: this.Page(),
    });
  }

  static LogEmail() {
    return Joi.object({
      template: Joi.string(),
    });
  }

  static LogPushnotification() {
    return Joi.object({
      pushtokens: Joi.array().items(Joi.string()),
    });
  }

  static LogMeta() {
    return Joi.object({
      type: Joi.string(),

      identifier: Joi.string(),

      key: Joi.string(),

      offset: Joi.string(),

      partition: Joi.string(),

      topic: Joi.string(),
    });
  }

  static Log() {
    return Joi.object({
      email: this.LogEmail(),

      pushnotification: this.LogPushnotification(),

      meta: this.LogMeta(),

      _id: Joi.string(),

      application: Joi.string(),

      service: Joi.string(),

      step: Joi.string(),

      status: Joi.string(),

      data: Joi.any(),

      expire_at: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static Logs() {
    return Joi.object({
      items: Joi.array().items(this.Log()),

      page: this.Page(),
    });
  }

  static PushtokenReq() {
    return Joi.object({
      action: Joi.string(),

      bundle_identifier: Joi.string(),

      push_token: Joi.string(),

      unique_device_id: Joi.string(),
    });
  }

  static PushtokenRes() {
    return Joi.object({
      _id: Joi.string(),

      bundle_identifier: Joi.string(),

      push_token: Joi.string(),

      unique_device_id: Joi.string(),

      type: Joi.string(),

      platform: Joi.string(),

      application_id: Joi.string(),

      user_id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      expired_at: Joi.string(),
    });
  }

  static SmsProviderReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      sender: Joi.string(),

      username: Joi.string(),

      authkey: Joi.string(),

      type: Joi.string(),

      provider: Joi.string(),
    });
  }

  static SmsProvider() {
    return Joi.object({
      rpt: Joi.number(),

      type: Joi.string(),

      provider: Joi.string(),

      _id: Joi.string(),

      name: Joi.string(),

      description: Joi.string(),

      sender: Joi.string(),

      username: Joi.string(),

      authkey: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SmsProviders() {
    return Joi.object({
      items: Joi.array().items(this.SmsProvider()),

      page: this.Page(),
    });
  }

  static SmsTemplateDeleteSuccessRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static SmsTemplateDeleteFailureRes() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string(),
    });
  }

  static SmsTemplateMessage() {
    return Joi.object({
      template_type: Joi.string(),

      template: Joi.string(),
    });
  }

  static SmsTemplateReq() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      attachments: Joi.array().items(Joi.any()),

      priority: Joi.string(),
    });
  }

  static SmsTemplateRes() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      slug: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SmsTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      priority: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SystemSmsTemplate() {
    return Joi.object({
      is_system: Joi.boolean(),

      is_internal: Joi.boolean(),

      description: Joi.string(),

      tags: Joi.array().items(Joi.any()),

      priority: Joi.string(),

      published: Joi.boolean(),

      _id: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      message: this.SmsTemplateMessage(),

      template_variables: Joi.any(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static SmsTemplates() {
    return Joi.object({
      items: Joi.array().items(this.SmsTemplate()),

      page: this.Page(),
    });
  }

  static SystemSmsTemplates() {
    return Joi.object({
      items: Joi.array().items(this.SystemSmsTemplate()),

      page: this.Page(),
    });
  }

  static Notification() {
    return Joi.object({
      title: Joi.string(),

      body: Joi.string(),

      subtitle: Joi.string(),

      icon: Joi.string(),

      deeplink: Joi.string(),

      click_action: Joi.string(),
    });
  }

  static SystemNotificationUser() {
    return Joi.object({
      type: Joi.string(),

      value: Joi.string(),
    });
  }

  static SystemNotificationSettings() {
    return Joi.object({
      sound: Joi.boolean(),

      priority: Joi.string(),

      time_to_live: Joi.string(),
    });
  }

  static SystemNotification() {
    return Joi.object({
      notification: this.Notification(),

      user: this.SystemNotificationUser(),

      settings: this.SystemNotificationUser(),

      _id: Joi.string(),

      group: Joi.string(),

      created_at: Joi.string(),
    });
  }

  static SystemNotificationsPage() {
    return Joi.object({
      type: Joi.string(),

      current: Joi.number(),

      size: Joi.number(),

      item_total: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static SystemNotifications() {
    return Joi.object({
      items: Joi.array().items(this.SystemNotification()),

      last_read_anchor: Joi.number(),

      page: this.Page(),
    });
  }

  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.object()),

      success: Joi.boolean().required(),

      app_id: Joi.string().required(),

      display_fields: Joi.array().items(Joi.string()).required(),

      excluded_fields: Joi.array().items(Joi.string()).required(),

      created: Joi.boolean().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().required(),

      code: Joi.string().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      merchant_salt: Joi.string().required(),

      config_type: Joi.string().required(),

      secret: Joi.string().required(),

      key: Joi.string().required(),

      is_active: Joi.boolean(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().required(),

      is_active: Joi.boolean(),

      aggregator_name: this.PaymentGatewayConfig(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string()).required(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().required(),

      code: Joi.string().required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: this.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().required(),

      small: Joi.string().required(),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_reference: Joi.string(),

      exp_year: Joi.number(),

      display_name: Joi.string(),

      card_brand_image: Joi.string(),

      aggregator_name: Joi.string().required(),

      code: Joi.string(),

      card_id: Joi.string(),

      card_type: Joi.string(),

      fynd_vpa: Joi.string(),

      merchant_code: Joi.string(),

      card_isin: Joi.string(),

      intent_flow: Joi.string(),

      card_issuer: Joi.string(),

      retry_count: Joi.number(),

      card_fingerprint: Joi.string(),

      nickname: Joi.string(),

      intent_app_error_list: Joi.array().items(Joi.string()),

      expired: Joi.boolean(),

      exp_month: Joi.number(),

      name: Joi.string(),

      card_token: Joi.string(),

      display_priority: Joi.number(),

      timeout: Joi.number(),

      card_brand: Joi.string(),

      card_name: Joi.string(),

      card_number: Joi.string(),

      logo_url: this.PaymentModeLogo(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_name: Joi.string().required(),

      aggregator_name: Joi.string(),

      name: Joi.string().required(),

      add_card_enabled: Joi.boolean(),

      anonymous_enable: Joi.boolean(),

      display_priority: Joi.number().required(),

      list: Joi.array().items(this.PaymentModeList()),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array().items(this.RootPaymentMode()).required(),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      payment_options: this.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      transfer_type: Joi.string().required(),

      customers: Joi.object().required(),

      unique_transfer_no: Joi.object().required(),

      payouts_aggregators: Joi.array().items(Joi.object()).required(),

      more_attributes: Joi.object().required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().required(),

      users: Joi.object().required(),

      bank_details: Joi.object().required(),

      aggregator: Joi.string().required(),

      unique_external_id: Joi.string().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().required(),

      payment_status: Joi.string().required(),

      unique_transfer_no: Joi.string().required(),

      users: Joi.object().required(),

      success: Joi.boolean().required(),

      payouts: Joi.object().required(),

      bank_details: Joi.object().required(),

      created: Joi.boolean().required(),

      aggregator: Joi.string().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      unique_external_id: Joi.string().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.object()).required(),

      success: Joi.boolean().required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      config: Joi.object().required(),

      aggregator: Joi.string().required(),

      success: Joi.boolean().required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.object().required(),

      success: Joi.boolean().required(),
    });
  }

  static GetActivityStatus() {
    return Joi.object({
      activity_history: this.ActivityHistory().required(),
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
      orders: this.FailOrder().required(),
    });
  }

  static FailOrder() {
    return Joi.object({
      updated_at: Joi.string(),

      _id: Joi.string(),

      reason: Joi.string(),

      marketplace_order: this.MarketplaceOrder(),

      marketplace_order_id: Joi.string(),

      created_at: Joi.string(),

      app_id: Joi.string(),

      marketplace: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static MarketplaceOrder() {
    return Joi.object({
      order_status_url: Joi.string(),

      admin_graphql_api_id: Joi.string(),

      email: Joi.string(),

      test: Joi.boolean(),

      note: Joi.string(),

      total_price: Joi.string(),

      app_id: Joi.number(),

      total_discounts_set: this.TotalDiscountsSet(),

      total_price_set: this.TotalPriceSet(),

      total_tax_set: this.TotalTaxSet(),

      gateway: Joi.string(),

      name: Joi.string(),

      subtotal_price_set: this.SubtotalPriceSet(),

      number: Joi.number(),

      buyer_accepts_marketing: Joi.boolean(),

      contact_email: Joi.string(),

      token: Joi.string(),

      source_name: Joi.string(),

      payment_gateway_names: Joi.array().items(Joi.any()),

      presentment_currency: Joi.string(),

      subtotal_price: Joi.string(),

      processed_at: Joi.string(),

      order_number: Joi.number(),

      total_tip_received: Joi.string(),

      id: Joi.number(),

      confirmed: Joi.boolean(),

      currency: Joi.string(),

      total_line_items_price: Joi.string(),

      line_items: this.LineItems(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      total_weight: Joi.number(),

      billing_address: this.BillingAddress(),

      total_shipping_price_set: this.TotalShippingPriceSet(),

      customer: this.Customer(),

      total_discounts: Joi.string(),

      total_line_items_price_set: this.TotalLineItemsPriceSet(),

      tags: Joi.string(),

      total_price_usd: Joi.string(),

      user_id: Joi.number(),

      total_tax: Joi.string(),

      processing_method: Joi.string(),

      shipping_address: this.ShippingAddress(),

      taxes_included: Joi.boolean(),

      financial_status: Joi.string(),
    });
  }

  static TotalDiscountsSet() {
    return Joi.object({
      presentment_money: this.PresentmentMoney(),

      shop_money: this.ShopMoney(),
    });
  }

  static PresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static ShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalPriceSet() {
    return Joi.object({
      shop_money: this.TotalPriceSetShopMoney(),

      presentment_money: this.TotalPriceSetPresentmentMoney(),
    });
  }

  static TotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalTaxSet() {
    return Joi.object({
      shop_money: this.TotalTaxSetShopMoney(),

      presentment_money: this.TotalTaxSetPresentmentMoney(),
    });
  }

  static TotalTaxSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalTaxSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static SubtotalPriceSet() {
    return Joi.object({
      shop_money: this.SubtotalPriceSetShopMoney(),

      presentment_money: this.SubtotalPriceSetPresentmentMoney(),
    });
  }

  static SubtotalPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static SubtotalPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static LineItems() {
    return Joi.object({
      sku: Joi.string(),

      fulfillable_quantity: Joi.number(),

      grams: Joi.number(),

      total_discount: Joi.string(),

      article: this.LineItemsArticle(),

      title: Joi.string(),

      variant_inventory_management: Joi.string(),

      id: Joi.number(),

      variant_id: Joi.number(),

      variant_title: Joi.string(),

      product_exists: Joi.boolean(),

      price: Joi.string(),

      admin_graphql_api_id: Joi.string(),

      quantity: Joi.number(),

      vendor: Joi.string(),

      fulfillment_service: Joi.string(),

      taxable: Joi.boolean(),

      name: Joi.string(),

      product_id: Joi.number(),

      price_set: this.PriceSet(),

      tax_lines: this.TaxLines(),

      requires_shipping: Joi.boolean(),

      gift_card: Joi.boolean(),

      total_discount_set: this.TotalDiscountSet(),
    });
  }

  static LineItemsArticle() {
    return Joi.object({
      quantities: this.Quantities(),

      old_article_uid: Joi.string(),

      total_quantity: Joi.number(),

      manufacturer: this.Manufacturer(),

      price: this.ArticlePrice(),

      track_inventory: Joi.boolean(),

      company: this.Company(),

      is_active: Joi.boolean(),

      date_meta: this.FailOrderDateMeta(),

      fragile: Joi.boolean(),

      marketplace_identifiers: this.MarketplaceIdentifiers(),

      size: Joi.string(),

      is_set: Joi.boolean(),

      dimension: this.Dimension(),

      weight: this.Weight(),

      store: this.Store(),

      meta: this.ArticleMeta(),

      uid: Joi.string(),

      brand: this.ArticleBrand(),

      item_id: Joi.number(),

      fynd_article_code: Joi.string(),

      _id: Joi.string(),

      identifier: this.LineItemsArticleIdentifier(),

      seller_identifier: Joi.string(),

      fynd_item_code: Joi.string(),

      country_of_origin: Joi.string(),
    });
  }

  static Quantities() {
    return Joi.object({
      not_available: this.NotAvailable(),

      sellable: this.Sellable(),

      order_committed: this.OrderCommitted(),

      damaged: this.Damaged(),
    });
  }

  static NotAvailable() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string(),
    });
  }

  static Sellable() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string(),
    });
  }

  static OrderCommitted() {
    return Joi.object({
      count: Joi.number(),

      updated_at: Joi.string(),
    });
  }

  static Damaged() {
    return Joi.object({
      updated_at: Joi.string(),

      count: Joi.number(),
    });
  }

  static Manufacturer() {
    return Joi.object({
      is_default: Joi.boolean(),

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

      company_type: Joi.string(),

      business_type: Joi.string(),

      company_name: Joi.string(),

      created_on: Joi.string(),

      pan_no: Joi.string(),

      return_allowed: Joi.boolean(),

      meta: Joi.string(),

      exchange_allowed: Joi.boolean(),

      agreement_start_date: Joi.string(),

      exchange_within_days: Joi.number(),

      payment_procesing_charge: Joi.number(),

      fynd_a_fit_available: Joi.boolean(),

      modified_on: Joi.string(),

      return_within_days: Joi.number(),
    });
  }

  static FailOrderDateMeta() {
    return Joi.object({
      added_on_store: Joi.string(),

      inventory_updated_on: Joi.string(),

      created_on: Joi.string(),

      modified_on: Joi.string(),
    });
  }

  static MarketplaceIdentifiers() {
    return Joi.object({
      tatacliq_luxury: this.TatacliqLuxury(),
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

      is_default: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

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
      sku_code: Joi.string(),
    });
  }

  static PriceSet() {
    return Joi.object({
      shop_money: this.PriceSetShopMoney(),

      presentment_money: this.PriceSetPresentmentMoney(),
    });
  }

  static PriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static PriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TaxLines() {
    return Joi.object({
      title: Joi.string(),

      price: Joi.string(),

      rate: Joi.number(),

      price_set: this.TaxLinesPriceSet(),
    });
  }

  static TaxLinesPriceSet() {
    return Joi.object({
      shop_money: this.TaxLinesPriceSetShopMoney(),

      presentment_money: this.TaxLinesPriceSetPresentmentMoney(),
    });
  }

  static TaxLinesPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TaxLinesPriceSetPresentmentMoney() {
    return Joi.object({
      currency_code: Joi.string(),

      amount: Joi.string(),
    });
  }

  static TotalDiscountSet() {
    return Joi.object({
      presentment_money: this.TotalDiscountSetPresentmentMoney(),

      shop_money: this.TotalDiscountSetShopMoney(),
    });
  }

  static TotalDiscountSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalDiscountSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static BillingAddress() {
    return Joi.object({
      address1: Joi.string(),

      city: Joi.string(),

      zip: Joi.string(),

      last_name: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      province_code: Joi.string(),

      phone: Joi.string(),

      company: Joi.string(),

      latitude: Joi.number(),

      name: Joi.string(),

      country: Joi.string(),

      country_code: Joi.string(),

      first_name: Joi.string(),

      province: Joi.string(),
    });
  }

  static TotalShippingPriceSet() {
    return Joi.object({
      shop_money: this.TotalShippingPriceSetShopMoney(),

      presentment_money: this.TotalShippingPriceSetPresentmentMoney(),
    });
  }

  static TotalShippingPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalShippingPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static Customer() {
    return Joi.object({
      created_at: Joi.string(),

      id: Joi.number(),

      last_name: Joi.string(),

      state: Joi.string(),

      last_order_id: Joi.number(),

      note: Joi.string(),

      verified_email: Joi.boolean(),

      phone: Joi.string(),

      accepts_marketing: Joi.boolean(),

      first_name: Joi.string(),

      tags: Joi.string(),

      last_order_name: Joi.string(),

      orders_count: Joi.number(),

      total_spent: Joi.string(),

      tax_exempt: Joi.boolean(),

      currency: Joi.string(),

      accepts_marketing_updated_at: Joi.string(),

      email: Joi.string(),

      updated_at: Joi.string(),

      admin_graphql_api_id: Joi.string(),

      default_address: this.DefaultAddress(),
    });
  }

  static DefaultAddress() {
    return Joi.object({
      last_name: Joi.string(),

      name: Joi.string(),

      province_code: Joi.string(),

      country_code: Joi.string(),

      is_default: Joi.boolean(),

      id: Joi.number(),

      customer_id: Joi.number(),

      first_name: Joi.string(),

      address1: Joi.string(),

      phone: Joi.string(),

      country_name: Joi.string(),

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
      shop_money: this.TotalLineItemsPriceSetShopMoney(),

      presentment_money: this.TotalLineItemsPriceSetPresentmentMoney(),
    });
  }

  static TotalLineItemsPriceSetShopMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static TotalLineItemsPriceSetPresentmentMoney() {
    return Joi.object({
      amount: Joi.string(),

      currency_code: Joi.string(),
    });
  }

  static ShippingAddress() {
    return Joi.object({
      address1: Joi.string(),

      zip: Joi.string(),

      address2: Joi.string(),

      country_code: Joi.string(),

      country: Joi.string(),

      last_name: Joi.string(),

      latitude: Joi.number(),

      province_code: Joi.string(),

      first_name: Joi.string(),

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
      items: Joi.array().items(this.OrderItems()).required(),

      filters: this.Filters().required(),

      next_order_status: this.NextOrderStatus().required(),

      page: this.PlatformOrderPage().required(),

      applied_filters: this.AppliedFilters().required(),
    });
  }

  static OrderItems() {
    return Joi.object({
      user: this.PlatformOrderUserInfo(),

      delivery_address: this.PlatformDeliveryAddress(),

      channel: this.Channel(),

      breakup_values: this.PlatformBreakupValues(),

      id: Joi.string(),

      application: this.PlatformApplication(),

      shipments: this.PlatformShipment(),

      created_at: Joi.string(),

      total_shipments_in_order: Joi.number(),

      payments: this.ItemsPayments(),
    });
  }

  static PlatformOrderUserInfo() {
    return Joi.object({
      mobile: Joi.string(),

      first_name: Joi.string(),

      gender: Joi.string(),

      email: Joi.string(),

      last_name: Joi.string(),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      avis_user_id: Joi.string(),
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

      updated_at: Joi.string(),

      city: Joi.string(),

      landmark: Joi.string(),

      created_at: Joi.string(),

      name: Joi.string(),

      address: Joi.string(),

      phone: Joi.string(),

      longitude: Joi.number(),

      address_type: Joi.string(),

      email: Joi.string(),

      pincode: Joi.string(),

      address2: Joi.string(),

      contact_person: Joi.string(),

      address_category: Joi.string(),
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

      post_order_reassignment: Joi.boolean(),

      id: Joi.string(),

      description: Joi.string(),

      dp_assignment: Joi.boolean(),

      article_assignment: this.ArticleAssignment(),

      force_reassignment: Joi.boolean(),

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

      breakup_values: this.ShipmentBreakupValues(),

      id: Joi.string(),

      dp_details: this.DpDetails(),

      invoice: this.ShipmentInvoice(),

      fulfilling_store: this.PlatformFulfillingStore(),

      payments: this.Payments(),

      gst: this.ShipmentGst(),

      company: this.Company(),

      brand: this.PlatformShipmentBrand(),

      coupon: Joi.object(),

      order_source: Joi.string(),

      is_not_fynd_source: Joi.boolean(),

      comment: Joi.string(),

      promise: this.Promise(),

      tracking_details: this.ShipmentTrackingDetails(),

      is_fynd_coupon: Joi.boolean(),

      order_type: Joi.string(),

      user: this.ShipmentUser(),
    });
  }

  static PlatformShipmentStatus() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.number()),

      created_at: Joi.string(),

      status: Joi.string(),

      name: Joi.string(),

      progress: Joi.number(),

      shipment_id: Joi.string(),

      current_shipment_status: Joi.string(),

      color_code: Joi.string(),
    });
  }

  static Bags() {
    return Joi.object({
      financial_breakup: Joi.array().items(this.BagFinancialBreakup()),

      status: this.BagCurrStatus(),

      item: this.BagItem(),

      article: this.BagArticle(),

      id: Joi.number(),

      prices: this.BagPrices(),

      gst_details: this.GstDetails(),

      breakup_values: this.BagBreakupValues(),

      update_time: Joi.number(),

      current_status: this.BagCurrentStatus(),

      bag_status: this.BagStatus(),
    });
  }

  static BagFinancialBreakup() {
    return Joi.object({
      value_of_good: Joi.number(),

      hsn_code: Joi.string(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      gst_fee: Joi.string(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      gst_tax_percentage: Joi.number(),

      size: Joi.string(),

      total_units: Joi.number(),

      discount: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      gst_tag: Joi.string(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      identifiers: this.Identifiers(),

      item_name: Joi.string(),

      added_to_fynd_cash: Joi.boolean(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string(),
    });
  }

  static BagCurrStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean(),

      is_customer_return_allowed: Joi.boolean(),

      is_active: Joi.boolean(),

      is_returnable: Joi.boolean(),

      can_be_cancelled: Joi.boolean(),
    });
  }

  static BagItem() {
    return Joi.object({
      id: Joi.number(),

      size: Joi.string(),

      slug_key: Joi.string(),

      can_return: Joi.boolean(),

      brand_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string()),

      name: Joi.string(),

      code: Joi.string(),

      can_cancel: Joi.boolean(),

      attributes: this.BagItemAttributes(),

      l3_category_name: Joi.string(),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string()),

      image: Joi.array().items(Joi.string()),

      brand: Joi.string(),

      last_updated_at: Joi.string(),
    });
  }

  static BagItemAttributes() {
    return Joi.object({
      item_code: Joi.string(),

      brand_name: Joi.string(),

      country_of_origin: Joi.string(),
    });
  }

  static BagArticle() {
    return Joi.object({
      identifiers: this.ArticleIdentifiers(),

      esp_modified: Joi.boolean(),

      is_set: Joi.boolean(),

      size: Joi.string(),

      code: Joi.string(),

      set: this.Set(),

      seller_identifier: Joi.string(),

      return_config: this.BagArticleReturnConfig(),

      _id: Joi.string(),

      uid: Joi.string(),

      child_details: Joi.object(),
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

      size_distribution: this.SetSizeDistribution(),
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
      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_effective_discount: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      brand_calculated_amount: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static GstDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.string(),

      gst_tag: Joi.string(),

      hsn_code: Joi.string(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),
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
      updated_at: Joi.string(),

      bag_state_mapper: this.BagStateMapper(),

      status: Joi.string(),

      state_type: Joi.string(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string(),

      is_active: Joi.boolean(),

      display_name: Joi.string(),

      name: Joi.string(),

      app_display_name: Joi.string(),
    });
  }

  static BagStatus() {
    return Joi.object({
      status: Joi.string(),

      state_type: Joi.string(),

      updated_at: Joi.string(),

      bag_state_mapper: this.BagStatusBagStateMapper(),
    });
  }

  static BagStatusBagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      display_name: Joi.string(),

      name: Joi.string(),

      app_display_name: Joi.string(),

      app_state_name: Joi.string(),
    });
  }

  static BagPrices() {
    return Joi.object({
      cashback: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      price_effective: Joi.number(),

      refund_amount: Joi.number(),

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
      gst_tag: Joi.string(),
    });
  }

  static ShipmentInvoice() {
    return Joi.object({
      payment_type: Joi.string(),

      updated_date: Joi.string(),

      invoice_url: Joi.string(),

      label_url: Joi.string(),

      payment_mode: Joi.string(),

      amount_to_collect: Joi.number(),

      rto_address: this.RtoAddress(),
    });
  }

  static RtoAddress() {
    return Joi.object({
      name: Joi.string(),

      id: Joi.number(),

      phone: Joi.string(),

      location_type: Joi.string(),

      store_address_json: this.StoreAddressJson(),

      code: Joi.string(),

      address1: Joi.string(),

      city: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      company_id: Joi.number(),

      contact_person: Joi.string(),

      state: Joi.string(),

      store_email: Joi.string(),

      address2: Joi.string(),
    });
  }

  static StoreAddressJson() {
    return Joi.object({
      country: Joi.string(),

      latitude: Joi.number(),

      updated_at: Joi.string(),

      area: Joi.string(),

      state: Joi.string(),

      address_type: Joi.string(),

      city: Joi.string(),

      pincode: Joi.string(),

      address1: Joi.string(),

      address2: Joi.string(),

      longitude: Joi.number(),

      email: Joi.string(),

      phone: Joi.string(),

      created_at: Joi.string(),

      contact_person: Joi.string(),

      address_category: Joi.string(),

      version: Joi.string(),

      landmark: Joi.string(),
    });
  }

  static PlatformFulfillingStore() {
    return Joi.object({
      packaging_material_count: Joi.number(),

      location_type: Joi.string(),

      code: Joi.string(),

      city: Joi.string(),

      meta: this.FulfillingStoreMeta(),

      name: Joi.string(),

      is_active: Joi.boolean(),

      address1: Joi.string(),

      store_email: Joi.string(),

      is_archived: Joi.boolean(),

      state: Joi.string(),

      address2: Joi.string(),

      contact_person: Joi.string(),

      phone: Joi.string(),

      is_enabled_for_recon: Joi.boolean(),

      fulfillment_channel: Joi.string(),

      created_at: Joi.string(),

      id: Joi.number(),

      pincode: Joi.string(),

      brand_store_tags: Joi.array().items(Joi.string()),

      company_id: Joi.number(),

      store_address_json: this.FulfillingStoreStoreAddressJson(),

      updated_at: Joi.string(),

      login_username: Joi.string(),

      country: Joi.string(),
    });
  }

  static FulfillingStoreMeta() {
    return Joi.object({
      additional_contact_details: this.AdditionalContactDetails(),

      documents: this.Documents(),

      gst_number: Joi.string(),

      display_name: Joi.string(),

      product_return_config: this.ProductReturnConfig(),

      allow_dp_assignment_from_fynd: Joi.boolean(),

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
      legal_name: Joi.string(),

      type: Joi.string(),

      value: Joi.string(),

      verified: Joi.boolean(),
    });
  }

  static ProductReturnConfig() {
    return Joi.object({
      on_same_store: Joi.boolean(),
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

      contact_person: Joi.string(),

      country: Joi.string(),

      pincode: Joi.string(),

      version: Joi.string(),

      created_at: Joi.string(),

      address_type: Joi.string(),

      city: Joi.string(),

      address1: Joi.string(),

      landmark: Joi.string(),

      latitude: Joi.number(),

      longitude: Joi.number(),

      updated_at: Joi.string(),

      address_category: Joi.string(),
    });
  }

  static Payments() {
    return Joi.object({
      is_active: Joi.boolean(),

      display_name: Joi.string(),

      logo: Joi.string(),

      source: Joi.string(),

      source_nickname: Joi.string(),

      display_priority: Joi.number(),

      id: Joi.number(),

      mode: Joi.string(),

      payment_identifier: Joi.string(),
    });
  }

  static ShipmentGst() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      gst_fee: Joi.number(),
    });
  }

  static PlatformShipmentBrand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string(),

      modified_on: Joi.string(),

      id: Joi.number(),

      is_virtual_invoice: Joi.boolean(),

      created_on: Joi.string(),

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

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentUser() {
    return Joi.object({
      email: Joi.string(),

      id: Joi.number(),

      first_name: Joi.string(),

      mobile: Joi.string(),

      gender: Joi.string(),

      last_name: Joi.string(),

      is_anonymous_user: Joi.boolean(),

      mongo_user_id: Joi.string(),
    });
  }

  static ItemsPayments() {
    return Joi.object({
      display_priority: Joi.number(),

      id: Joi.number(),

      is_active: Joi.boolean(),

      display_name: Joi.string(),

      logo: Joi.string(),

      payment_identifier: Joi.string(),

      source_nickname: Joi.string(),

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

      is_default: Joi.boolean(),

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
      bag_confirmed: this.BagConfirmed(),

      dp_assigned: this.DpAssigned(),

      return_bag_delivered: this.ReturnBagDelivered(),

      placed: this.Placed(),

      delivery_done: this.DeliveryDone(),

      pending: this.Pending(),

      bag_packed: this.BagPacked(),
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

      has_next: Joi.boolean(),

      item_total: this.ItemTotal(),
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

      from_date: Joi.string(),

      to_date: Joi.string(),
    });
  }

  static UpdateOrderReprocessResponse() {
    return Joi.object({
      status: Joi.string().required(),
    });
  }

  static PlatformOrderTrack() {
    return Joi.object({
      success: Joi.boolean().required(),

      request_id: Joi.string().required(),

      message: Joi.string().required(),

      mobile: Joi.string().required(),

      country_code: Joi.string().required(),

      resend_timer: Joi.number().required(),

      resend_token: Joi.string(),
    });
  }

  static GetPingResponse() {
    return Joi.object({
      ping: Joi.string().required(),
    });
  }

  static UpdateShipmentStatusResponse() {
    return Joi.object({
      shipments: Joi.object().required(),

      error_shipments: Joi.array().items(any),
    });
  }

  static UpdateShipmentStatusBody() {
    return Joi.object({
      shipments: Joi.object().required(),

      force_transition: Joi.boolean().required(),

      task: Joi.boolean().required(),
    });
  }

  static PlatformShipmentTrack() {
    return Joi.object({
      results: this.Results().required(),
    });
  }

  static Results() {
    return Joi.object({
      awb: Joi.string(),

      updated_at: Joi.string(),

      last_location_recieved_at: Joi.string(),

      reason: Joi.string(),

      shipment_type: Joi.string(),

      status: Joi.string(),

      updated_time: Joi.string(),

      account_name: Joi.string(),
    });
  }

  static UpdateProcessShipmenstRequestBody() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string()).required(),

      expected_status: Joi.string().required(),
    });
  }

  static UpdateProcessShipmenstRequestResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().required(),
    });
  }

  static GetVoiceCallbackResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static GetClickToCallResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static DeleteResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      code: Joi.string(),

      message: Joi.string(),

      meta: Joi.object(),

      status: Joi.number(),
    });
  }

  static SearchKeywordResult() {
    return Joi.object({
      sort_on: Joi.string().required(),

      query: Joi.object().required(),
    });
  }

  static CreateSearchKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      result: this.SearchKeywordResult().required(),

      is_active: Joi.boolean(),

      app_id: Joi.string(),
    });
  }

  static GetSearchWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string()),

      uid: Joi.string(),

      _custom_json: Joi.object(),

      result: Joi.object(),

      app_id: Joi.string(),
    });
  }

  static GetSearchWordsDetailResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.GetSearchWordsData(),
    });
  }

  static GetSearchWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetSearchWordsData()),
    });
  }

  static Media() {
    return Joi.object({
      type: Joi.string(),

      url: Joi.string(),
    });
  }

  static AutocompletePageAction() {
    return Joi.object({
      type: Joi.string().required(),

      query: Joi.object().required(),

      url: Joi.string(),

      params: Joi.object(),
    });
  }

  static AutocompleteAction() {
    return Joi.object({
      type: Joi.string(),

      page: this.AutocompletePageAction(),
    });
  }

  static AutocompleteResult() {
    return Joi.object({
      logo: this.Media(),

      _custom_json: Joi.object(),

      display: Joi.string(),

      action: this.AutocompleteAction(),
    });
  }

  static CreateAutocompleteKeyword() {
    return Joi.object({
      words: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      results: Joi.array().items(this.AutocompleteResult()),

      is_active: Joi.boolean(),

      app_id: Joi.string(),
    });
  }

  static GetAutocompleteWordsData() {
    return Joi.object({
      words: Joi.array().items(Joi.string()),

      uid: Joi.string(),

      _custom_json: Joi.object(),

      results: Joi.array().items(Joi.object()),

      app_id: Joi.string(),
    });
  }

  static GetAutocompleteWordsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetAutocompleteWordsData()),
    });
  }

  static CreateAutocompleteWordsResponse() {
    return Joi.object({
      words: Joi.array().items(Joi.string()),

      _custom_json: Joi.object(),

      app_id: Joi.string(),

      results: Joi.array().items(Joi.object()),
    });
  }

  static ProductBundleItem() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      max_quantity: Joi.number().required(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number().required(),

      auto_select: Joi.boolean(),

      product_uid: Joi.number().required(),
    });
  }

  static ProductBundleRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      choice: Joi.string().required(),

      modified_by: Joi.object(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string(),

      created_by: Joi.object(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      created_on: Joi.string(),

      slug: Joi.string().required(),

      meta: Joi.object(),

      name: Joi.string().required(),
    });
  }

  static GetProductBundleCreateResponse() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      company_id: Joi.number(),

      choice: Joi.string().required(),

      modified_by: Joi.object(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string(),

      created_by: Joi.object(),

      id: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      created_on: Joi.string(),

      slug: Joi.string().required(),

      meta: Joi.object(),

      name: Joi.string().required(),
    });
  }

  static GetProductBundleListingResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetProductBundleCreateResponse()),
    });
  }

  static ProductBundleUpdateRequest() {
    return Joi.object({
      same_store_assignment: Joi.boolean(),

      page_visibility: Joi.array().items(Joi.string()),

      logo: Joi.string(),

      choice: Joi.string().required(),

      modified_by: Joi.object(),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string(),

      products: Joi.array().items(this.ProductBundleItem()).required(),

      slug: Joi.string().required(),

      meta: Joi.object(),

      name: Joi.string().required(),
    });
  }

  static Price() {
    return Joi.object({
      currency: Joi.string(),

      max_effective: Joi.number(),

      min_effective: Joi.number(),

      max_marked: Joi.number(),

      min_marked: Joi.number(),
    });
  }

  static LimitedProductData() {
    return Joi.object({
      uid: Joi.number(),

      price: Joi.object(),

      short_description: Joi.string(),

      identifier: Joi.object(),

      item_code: Joi.string(),

      country_of_origin: Joi.string(),

      sizes: Joi.array().items(Joi.string()),

      quantity: Joi.number(),

      slug: Joi.string(),

      attributes: Joi.object(),

      name: Joi.string(),

      images: Joi.array().items(Joi.string()),
    });
  }

  static Size() {
    return Joi.object({
      quantity: Joi.number(),

      is_available: Joi.boolean(),

      display: Joi.string(),

      value: Joi.string(),
    });
  }

  static GetProducts() {
    return Joi.object({
      allow_remove: Joi.boolean(),

      price: this.Price(),

      max_quantity: Joi.number(),

      auto_add_to_cart: Joi.boolean(),

      min_quantity: Joi.number(),

      auto_select: Joi.boolean(),

      product_details: this.LimitedProductData(),

      sizes: Joi.array().items(this.Size()),

      product_uid: Joi.number(),
    });
  }

  static GetProductBundleResponse() {
    return Joi.object({
      page_visibility: Joi.array().items(Joi.string()),

      same_store_assignment: Joi.boolean(),

      logo: Joi.string(),

      company_id: Joi.number(),

      choice: Joi.string(),

      is_active: Joi.boolean(),

      products: Joi.array().items(this.GetProducts()),

      slug: Joi.string(),

      meta: Joi.object(),

      name: Joi.string(),
    });
  }

  static Meta() {
    return Joi.object({
      headers: Joi.object(),

      values: Joi.array().items(Joi.object()),

      unit: Joi.string(),
    });
  }

  static Guide() {
    return Joi.object({
      meta: this.Meta(),
    });
  }

  static ValidateSizeGuide() {
    return Joi.object({
      company_id: Joi.number(),

      title: Joi.string().required(),

      active: Joi.boolean(),

      guide: this.Guide(),

      modified_by: Joi.object(),

      modified_on: Joi.string(),

      subtitle: Joi.string(),

      brand_id: Joi.number(),

      tag: Joi.string(),

      id: Joi.string(),

      created_on: Joi.string(),

      description: Joi.string(),

      created_by: Joi.object(),

      name: Joi.string().required(),

      image: Joi.string(),
    });
  }

  static SuccessResponse() {
    return Joi.object({
      uid: Joi.number(),

      success: Joi.boolean(),
    });
  }

  static ListSizeGuide() {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(Joi.object()),
    });
  }

  static SizeGuideResponse() {
    return Joi.object({
      company_id: Joi.number(),

      active: Joi.boolean(),

      modified_by: Joi.object(),

      guide: Joi.object(),

      title: Joi.string(),

      subtitle: Joi.string(),

      brand_id: Joi.number(),

      tag: Joi.string(),

      id: Joi.string(),

      created_on: Joi.string(),

      modified_on: Joi.string(),

      created_by: Joi.object(),

      name: Joi.string(),
    });
  }

  static GetCatalogConfigurationDetailsProduct() {
    return Joi.object({
      compare: Joi.object(),

      detail: Joi.object(),

      variant: Joi.object(),

      similar: Joi.object(),
    });
  }

  static MetaDataListingSortMetaResponse() {
    return Joi.object({
      display: Joi.string(),

      key: Joi.string(),
    });
  }

  static MetaDataListingSortResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingSortMetaResponse()),
    });
  }

  static MetaDataListingFilterMetaResponse() {
    return Joi.object({
      filter_types: Joi.array().items(Joi.string()),

      units: Joi.array().items(Joi.object()),

      display: Joi.string(),

      key: Joi.string(),
    });
  }

  static MetaDataListingFilterResponse() {
    return Joi.object({
      data: Joi.array().items(this.MetaDataListingFilterMetaResponse()),
    });
  }

  static MetaDataListingResponse() {
    return Joi.object({
      sort: this.MetaDataListingSortResponse().required(),

      filter: this.MetaDataListingFilterResponse().required(),
    });
  }

  static GetCatalogConfigurationMetaData() {
    return Joi.object({
      product: this.GetCatalogConfigurationDetailsProduct(),

      listing: this.MetaDataListingResponse(),
    });
  }

  static ProductSize() {
    return Joi.object({
      max: Joi.number().required(),

      min: Joi.number().required(),
    });
  }

  static ConfigurationProductVariantConfig() {
    return Joi.object({
      logo: Joi.string(),

      is_active: Joi.boolean().required(),

      key: Joi.string().required(),

      display_type: Joi.string().required(),

      priority: Joi.number().required(),

      size: this.ProductSize().required(),

      name: Joi.string().required(),
    });
  }

  static ConfigurationProductVariant() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductVariantConfig()),
    });
  }

  static ConfigurationProductConfig() {
    return Joi.object({
      logo: Joi.string(),

      title: Joi.string(),

      key: Joi.string().required(),

      subtitle: Joi.string(),

      priority: Joi.number().required(),

      size: this.ProductSize(),

      is_active: Joi.boolean().required(),
    });
  }

  static ConfigurationProductSimilar() {
    return Joi.object({
      config: Joi.array().items(this.ConfigurationProductConfig()),
    });
  }

  static ConfigurationProduct() {
    return Joi.object({
      variant: this.ConfigurationProductVariant().required(),

      similar: this.ConfigurationProductSimilar().required(),
    });
  }

  static ConfigurationListingSortConfig() {
    return Joi.object({
      logo: Joi.string(),

      is_active: Joi.boolean().required(),

      key: Joi.string().required(),

      priority: Joi.number().required(),

      name: Joi.string(),
    });
  }

  static ConfigurationListingSort() {
    return Joi.object({
      default_key: Joi.string().required(),

      config: Joi.array().items(this.ConfigurationListingSortConfig()),
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
      sort: Joi.string(),

      map: Joi.object(),

      value: Joi.string(),

      bucket_points: Joi.array().items(this.ConfigurationBucketPoints()),

      condition: Joi.string(),
    });
  }

  static ConfigurationListingFilterConfig() {
    return Joi.object({
      logo: Joi.string(),

      value_config: this.ConfigurationListingFilterValue(),

      is_active: Joi.boolean().required(),

      key: Joi.string().required(),

      priority: Joi.number().required(),

      type: Joi.string().required(),

      name: Joi.string(),
    });
  }

  static ConfigurationListingFilter() {
    return Joi.object({
      attribute_config: Joi.array().items(
        this.ConfigurationListingFilterConfig()
      ),

      allow_single: Joi.boolean().required(),
    });
  }

  static ConfigurationListing() {
    return Joi.object({
      sort: this.ConfigurationListingSort().required(),

      filter: this.ConfigurationListingFilter().required(),
    });
  }

  static AppConfiguration() {
    return Joi.object({
      product: this.ConfigurationProduct(),

      config_type: Joi.string().required(),

      listing: this.ConfigurationListing(),

      config_id: Joi.string(),

      app_id: Joi.string().required(),
    });
  }

  static AppCatalogConfiguration() {
    return Joi.object({
      product: this.ConfigurationProduct(),

      config_type: Joi.string().required(),

      listing: this.ConfigurationListing(),

      id: Joi.string(),

      config_id: Joi.string(),

      app_id: Joi.string().required(),
    });
  }

  static GetAppCatalogConfiguration() {
    return Joi.object({
      data: this.AppCatalogConfiguration(),

      is_default: Joi.boolean(),
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
      product: this.GetCatalogConfigurationDetailsProduct(),

      config_type: Joi.string().required(),

      listing: this.GetCatalogConfigurationDetailsSchemaListing(),

      id: Joi.string(),

      config_id: Joi.string(),

      app_id: Joi.string().required(),
    });
  }

  static GetAppCatalogEntityConfiguration() {
    return Joi.object({
      data: this.EntityConfiguration(),

      is_default: Joi.boolean(),
    });
  }

  static ProductFiltersValue() {
    return Joi.object({
      selected_max: Joi.number(),

      count: Joi.number(),

      display_format: Joi.string(),

      selected_min: Joi.number(),

      query_format: Joi.string(),

      currency_code: Joi.string(),

      min: Joi.number(),

      is_selected: Joi.boolean().required(),

      value: Joi.string().required(),

      max: Joi.number(),

      display: Joi.string().required(),

      currency_symbol: Joi.string(),
    });
  }

  static ProductFiltersKey() {
    return Joi.object({
      logo: Joi.string(),

      name: Joi.string().required(),

      display: Joi.string().required(),

      kind: Joi.string(),
    });
  }

  static ProductFilters() {
    return Joi.object({
      values: Joi.array().items(this.ProductFiltersValue()).required(),

      key: this.ProductFiltersKey().required(),
    });
  }

  static ProductSortOn() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.string(),

      is_selected: Joi.boolean(),
    });
  }

  static GetCollectionQueryOptionResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),
    });
  }

  static Schedule() {
    return Joi.object({
      cron: Joi.string(),

      duration: Joi.number(),

      end: Joi.string(),

      start: Joi.string(),
    });
  }

  static CollectionBadge() {
    return Joi.object({
      color: Joi.string(),

      text: Joi.string(),
    });
  }

  static SeoDetail() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),
    });
  }

  static UserInfo() {
    return Joi.object({
      username: Joi.string(),

      uid: Joi.string(),

      user_id: Joi.string(),

      email: Joi.string(),
    });
  }

  static CollectionImage() {
    return Joi.object({
      aspect_ratio: Joi.string().required(),

      url: Joi.string().required(),
    });
  }

  static CollectionBanner() {
    return Joi.object({
      portrait: this.CollectionImage().required(),

      landscape: this.CollectionImage().required(),
    });
  }

  static CreateCollection() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      _custom_json: Joi.object(),

      query: Joi.object(),

      sort_on: Joi.string(),

      _schedule: this.Schedule(),

      is_active: Joi.boolean(),

      published: Joi.boolean(),

      badge: this.CollectionBadge(),

      allow_facets: Joi.boolean(),

      seo: this.SeoDetail(),

      _locale_language: Joi.object(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      type: Joi.string().required(),

      created_by: this.UserInfo(),

      name: Joi.string().required(),

      app_id: Joi.string().required(),

      meta: Joi.object(),

      logo: this.CollectionImage().required(),

      tags: Joi.array().items(Joi.string()),

      banners: this.CollectionBanner().required(),

      modified_by: this.UserInfo(),

      description: Joi.string(),

      slug: Joi.string().required(),
    });
  }

  static BannerImage() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      url: Joi.string(),
    });
  }

  static ImageUrls() {
    return Joi.object({
      portrait: this.BannerImage(),

      landscape: this.BannerImage(),
    });
  }

  static CollectionCreateResponse() {
    return Joi.object({
      logo: this.BannerImage(),

      banners: this.ImageUrls(),

      type: Joi.string(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      badge: Joi.object(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: Joi.object(),

      cron: Joi.object(),

      meta: Joi.object(),

      query: Joi.object(),

      tag: Joi.array().items(Joi.string()),

      description: Joi.string(),

      name: Joi.string(),

      is_active: Joi.boolean(),

      app_id: Joi.string(),

      slug: Joi.string(),
    });
  }

  static CollectionListingFilterType() {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilterTag() {
    return Joi.object({
      name: Joi.string(),

      display: Joi.string(),

      is_selected: Joi.boolean(),
    });
  }

  static CollectionListingFilter() {
    return Joi.object({
      type: Joi.array().items(this.CollectionListingFilterType()),

      tags: Joi.array().items(this.CollectionListingFilterTag()),
    });
  }

  static ProductListingActionPage() {
    return Joi.object({
      type: Joi.string(),

      query: Joi.object(),
    });
  }

  static ProductListingAction() {
    return Joi.object({
      type: Joi.string(),

      page: this.ProductListingActionPage(),
    });
  }

  static Media1() {
    return Joi.object({
      type: Joi.string(),

      meta: Joi.object(),

      url: Joi.string().required(),
    });
  }

  static GetCollectionDetailNest() {
    return Joi.object({
      allow_sort: Joi.boolean(),

      cron: Joi.object(),

      query: Joi.object(),

      _schedule: Joi.object(),

      is_active: Joi.boolean(),

      action: this.ProductListingAction(),

      badge: Joi.object(),

      allow_facets: Joi.boolean(),

      uid: Joi.string(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      type: Joi.string(),

      meta: Joi.object(),

      name: Joi.string(),

      app_id: Joi.string(),

      logo: this.Media1(),

      banners: this.ImageUrls(),

      tag: Joi.array().items(Joi.string()),

      description: Joi.string(),

      slug: Joi.string(),
    });
  }

  static GetCollectionListingResponse() {
    return Joi.object({
      filters: this.CollectionListingFilter(),

      page: this.Page(),

      items: Joi.array().items(this.GetCollectionDetailNest()),
    });
  }

  static CollectionDetailResponse() {
    return Joi.object({
      logo: this.Media1(),

      banners: this.ImageUrls(),

      type: Joi.string(),

      visible_facets_keys: Joi.array().items(Joi.string()),

      badge: Joi.object(),

      allow_sort: Joi.boolean(),

      allow_facets: Joi.boolean(),

      _schedule: Joi.object(),

      cron: Joi.object(),

      meta: Joi.object(),

      query: Joi.object(),

      tag: Joi.array().items(Joi.string()),

      description: Joi.string(),

      name: Joi.string(),

      is_active: Joi.boolean(),

      app_id: Joi.string(),

      slug: Joi.string(),
    });
  }

  static CollectionItemRequest() {
    return Joi.object({
      page_no: Joi.number().required(),

      page_size: Joi.number().required(),
    });
  }

  static UpdatedResponse() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static Price1() {
    return Joi.object({
      currency_code: Joi.string(),

      max: Joi.number(),

      min: Joi.number(),

      currency_symbol: Joi.string(),
    });
  }

  static ProductListingPrice() {
    return Joi.object({
      effective: this.Price1(),

      marked: this.Price1(),
    });
  }

  static ProductListingDetail() {
    return Joi.object({
      price: this.ProductListingPrice(),

      highlights: Joi.array().items(Joi.string()),

      product_online_date: Joi.string(),

      item_type: Joi.string(),

      discount: Joi.string(),

      medias: Joi.array().items(this.Media1()),

      image_nature: Joi.string(),

      sellable: Joi.boolean(),

      attributes: Joi.object(),

      uid: Joi.number(),

      rating_count: Joi.number(),

      similars: Joi.array().items(Joi.string()),

      color: Joi.string(),

      tryouts: Joi.array().items(Joi.string()),

      type: Joi.string(),

      has_variant: Joi.boolean(),

      name: Joi.string(),

      rating: Joi.number(),

      short_description: Joi.string(),

      description: Joi.string(),

      promo_meta: Joi.object(),

      teaser_tag: Joi.object(),

      slug: Joi.string().required(),
    });
  }

  static GetCollectionItemsResponse() {
    return Joi.object({
      filters: Joi.array().items(this.ProductFilters()),

      sort_on: Joi.array().items(this.ProductSortOn()),

      page: this.Page(),

      items: Joi.array().items(this.ProductListingDetail()),
    });
  }

  static CatalogInsightItem() {
    return Joi.object({
      count: Joi.number(),

      out_of_stock_count: Joi.number(),

      sellable_count: Joi.number(),
    });
  }

  static CatalogInsightBrand() {
    return Joi.object({
      total_sizes: Joi.number(),

      available_sizes: Joi.number(),

      total_articles: Joi.number(),

      article_freshness: Joi.number(),

      available_articles: Joi.number(),

      name: Joi.string(),
    });
  }

  static CatalogInsightResponse() {
    return Joi.object({
      item: this.CatalogInsightItem(),

      brand_distribution: this.CatalogInsightBrand(),
    });
  }

  static CrossSellingData() {
    return Joi.object({
      products: Joi.number(),

      articles: Joi.number(),
    });
  }

  static CrossSellingResponse() {
    return Joi.object({
      data: this.CrossSellingData(),

      brand_distribution: this.CatalogInsightBrand(),
    });
  }

  static OptInPostRequest() {
    return Joi.object({
      enabled: Joi.boolean(),

      store_ids: Joi.array().items(Joi.number()),

      brand_ids: Joi.array().items(Joi.number()),

      opt_level: Joi.string().required(),
    });
  }

  static CompanyOptIn() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()).required(),

      store_ids: Joi.array().items(Joi.number()).required(),

      company_id: Joi.number().required(),

      platform: Joi.string().required(),

      modified_by: Joi.object(),

      opt_level: Joi.string().required(),

      enabled: Joi.boolean().required(),

      created_on: Joi.number().required(),

      modified_on: Joi.number().required(),

      created_by: Joi.object(),
    });
  }

  static GetOptInPlatform() {
    return Joi.object({
      page: this.Page().required(),

      items: Joi.array().items(this.CompanyOptIn()).required(),
    });
  }

  static OptinCompanyDetail() {
    return Joi.object({
      company_type: Joi.string(),

      business_type: Joi.string(),

      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static CompanyBrandDetail() {
    return Joi.object({
      brand_id: Joi.number(),

      brand_name: Joi.string(),

      total_article: Joi.number(),

      company_id: Joi.number(),
    });
  }

  static OptinCompanyBrandDetailsView() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.CompanyBrandDetail()),
    });
  }

  static OptinCompanyMetrics() {
    return Joi.object({
      company: Joi.string(),

      brand: Joi.number(),

      store: Joi.number(),
    });
  }

  static StoreDetail() {
    return Joi.object({
      uid: Joi.number(),

      display_name: Joi.string(),

      company_id: Joi.number(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      documents: Joi.array().items(Joi.object()),

      additional_contacts: Joi.array().items(Joi.object()),

      created_on: Joi.string(),

      modified_on: Joi.string(),

      name: Joi.string(),

      timing: Joi.object(),
    });
  }

  static OptinStoreDetails() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.StoreDetail()),
    });
  }

  static AttributeMasterFilter() {
    return Joi.object({
      depends_on: Joi.array().items(Joi.string()),

      indexing: Joi.boolean().required(),

      priority: Joi.number(),
    });
  }

  static AttributeSchemaRange() {
    return Joi.object({
      max: Joi.number(),

      min: Joi.number(),
    });
  }

  static AttributeMaster() {
    return Joi.object({
      type: Joi.string().required(),

      format: Joi.string(),

      range: this.AttributeSchemaRange(),

      multi: Joi.boolean(),

      mandatory: Joi.boolean(),

      enum: Joi.array().items(Joi.string()),
    });
  }

  static AttributeMasterMandatoryDetails() {
    return Joi.object({
      l3_keys: Joi.array().items(Joi.string()),
    });
  }

  static AttributeMasterMeta() {
    return Joi.object({
      enriched: Joi.boolean(),

      mandatory_details: this.AttributeMasterMandatoryDetails().required(),
    });
  }

  static AttributeMasterDetails() {
    return Joi.object({
      displayType: Joi.string().required(),
    });
  }

  static GenderDetail() {
    return Joi.object({
      filters: this.AttributeMasterFilter(),

      logo: Joi.string(),

      schema: this.AttributeMaster(),

      is_nested: Joi.boolean(),

      departments: Joi.array().items(Joi.string()),

      id: Joi.string(),

      enabled_for_end_consumer: Joi.boolean(),

      description: Joi.string(),

      meta: this.AttributeMasterMeta(),

      name: Joi.string(),

      details: this.AttributeMasterDetails(),

      slug: Joi.string(),
    });
  }

  static ProdcutTemplateCategoriesResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(Joi.object()),
    });
  }

  static PTErrorResponse() {
    return Joi.object({
      code: Joi.string(),

      errors: Joi.object(),

      message: Joi.string(),

      meta: Joi.object(),

      status: Joi.number(),
    });
  }

  static UserSerializer() {
    return Joi.object({
      username: Joi.string(),

      contact: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static GetDepartment() {
    return Joi.object({
      page_no: Joi.number(),

      priority_order: Joi.number(),

      logo: Joi.string(),

      page_size: Joi.number(),

      uid: Joi.number(),

      item_type: Joi.string(),

      modified_by: this.UserSerializer(),

      modified_on: Joi.string(),

      created_by: this.UserSerializer(),

      search: Joi.string(),

      created_on: Joi.string(),

      slug: Joi.string(),

      name: Joi.string(),

      is_active: Joi.boolean(),

      synonyms: Joi.array().items(Joi.string()),
    });
  }

  static DepartmentsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetDepartment()),
    });
  }

  static DepartmentErrorResponse() {
    return Joi.object({
      code: Joi.string(),

      errors: Joi.object(),

      message: Joi.string(),

      meta: Joi.object(),

      status: Joi.number(),
    });
  }

  static ProductTemplate() {
    return Joi.object({
      logo: Joi.string(),

      modified_by: Joi.object(),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      modified_on: Joi.string(),

      categories: Joi.array().items(Joi.string()),

      description: Joi.string(),

      departments: Joi.array().items(Joi.string()),

      is_archived: Joi.boolean(),

      created_by: Joi.object(),

      tag: Joi.string(),

      created_on: Joi.string(),

      slug: Joi.string().required(),

      attributes: Joi.array().items(Joi.string()),

      name: Joi.string(),
    });
  }

  static TemplatesResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.ProductTemplate(),
    });
  }

  static Properties() {
    return Joi.object({
      highlights: Joi.object(),

      brand_uid: Joi.object(),

      hsn_code: Joi.object(),

      media: Joi.object(),

      trader_type: Joi.object(),

      variants: Joi.object(),

      is_active: Joi.object(),

      currency: Joi.object(),

      no_of_boxes: Joi.object(),

      custom_order: Joi.object(),

      item_type: Joi.object(),

      item_code: Joi.object(),

      moq: Joi.object(),

      product_group_tag: Joi.object(),

      product_publish: Joi.object(),

      is_dependent: Joi.object(),

      size_guide: Joi.object(),

      return_config: Joi.object(),

      command: Joi.object(),

      multi_size: Joi.object(),

      country_of_origin: Joi.object(),

      name: Joi.object(),

      tags: Joi.object(),

      short_description: Joi.object(),

      trader: Joi.object(),

      sizes: Joi.object(),

      category_slug: Joi.object(),

      teaser_tag: Joi.object(),

      description: Joi.object(),

      slug: Joi.object(),
    });
  }

  static GlobalValidation() {
    return Joi.object({
      title: Joi.string(),

      definitions: Joi.object(),

      description: Joi.string(),

      properties: this.Properties(),

      required: Joi.array().items(Joi.string()),

      type: Joi.string(),
    });
  }

  static TemplateValidationData() {
    return Joi.object({
      template_validation: Joi.object(),

      global_validation: this.GlobalValidation(),
    });
  }

  static TemplateDetails() {
    return Joi.object({
      logo: Joi.string(),

      is_physical: Joi.boolean().required(),

      is_active: Joi.boolean(),

      categories: Joi.array().items(Joi.string()),

      description: Joi.string(),

      departments: Joi.array().items(Joi.string()),

      is_archived: Joi.boolean(),

      tag: Joi.string(),

      id: Joi.string(),

      slug: Joi.string().required(),

      attributes: Joi.array().items(Joi.string()),

      name: Joi.string(),
    });
  }

  static TemplatesValidationResponse() {
    return Joi.object({
      data: this.TemplateValidationData(),

      template_details: this.TemplateDetails(),
    });
  }

  static InventoryValidationResponse() {
    return Joi.object({
      data: Joi.object(),

      message: Joi.string(),
    });
  }

  static HSNData() {
    return Joi.object({
      country_of_origin: Joi.array().items(Joi.string()),

      hsn_code: Joi.array().items(Joi.string()),
    });
  }

  static HSNCodesResponse() {
    return Joi.object({
      data: this.HSNData(),

      message: Joi.string(),
    });
  }

  static UserInfo1() {
    return Joi.object({
      username: Joi.string(),

      uid: Joi.string(),

      user_id: Joi.string(),

      email: Joi.string(),
    });
  }

  static ProductTemplateExport() {
    return Joi.object({
      seller_id: Joi.number().required(),

      trigger_on: Joi.string().required(),

      data: Joi.object(),

      url: Joi.string(),

      completed_on: Joi.string(),

      template_tags: Joi.array().items(Joi.string()).required(),

      created_by: this.UserInfo1(),

      task_id: Joi.string().required(),

      status: Joi.string(),
    });
  }

  static ProductDownloadsResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.ProductTemplateExport()),
    });
  }

  static ProductConfigurationDownloads() {
    return Joi.object({
      data: Joi.array().items(Joi.object()),

      multivalue: Joi.boolean(),
    });
  }

  static Hierarchy() {
    return Joi.object({
      l1: Joi.number().required(),

      department: Joi.number().required(),

      l2: Joi.number().required(),
    });
  }

  static Media2() {
    return Joi.object({
      logo: Joi.string().required(),

      portrait: Joi.string().required(),

      landscape: Joi.string().required(),
    });
  }

  static CategoryMappingValues() {
    return Joi.object({
      name: Joi.string().required(),

      catalog_id: Joi.number(),
    });
  }

  static CategoryMapping() {
    return Joi.object({
      google: this.CategoryMappingValues(),

      facebook: this.CategoryMappingValues(),

      ajio: this.CategoryMappingValues(),
    });
  }

  static CategoryRequestBody() {
    return Joi.object({
      hierarchy: Joi.array().items(this.Hierarchy()),

      tryouts: Joi.array().items(Joi.string()),

      is_active: Joi.boolean().required(),

      departments: Joi.array().items(Joi.number()).required(),

      media: this.Media2(),

      priority: Joi.number(),

      slug: Joi.string(),

      level: Joi.number().required(),

      name: Joi.string().required(),

      synonyms: Joi.array().items(Joi.string()),

      marketplaces: this.CategoryMapping(),
    });
  }

  static CategoryCreateResponse() {
    return Joi.object({
      message: Joi.string(),

      uid: Joi.number(),
    });
  }

  static Category() {
    return Joi.object({
      uid: Joi.number(),

      hierarchy: Joi.array().items(this.Hierarchy()),

      _id: Joi.string(),

      modified_by: Joi.object(),

      tryouts: Joi.array().items(Joi.string()),

      is_active: Joi.boolean().required(),

      modified_on: Joi.string(),

      created_by: Joi.object(),

      departments: Joi.array().items(Joi.number()).required(),

      media: this.Media2(),

      priority: Joi.number(),

      created_on: Joi.string(),

      slug: Joi.string(),

      level: Joi.number().required(),

      name: Joi.string().required(),

      synonyms: Joi.array().items(Joi.string()),

      marketplaces: this.CategoryMapping(),
    });
  }

  static CategoryResponse() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.Category()),
    });
  }

  static CategoryUpdateResponse() {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
    });
  }

  static SingleCategoryResponse() {
    return Joi.object({
      page: Joi.object(),

      items: Joi.array().items(this.Category()),
    });
  }

  static CustomOrder() {
    return Joi.object({
      manufacturing_time: Joi.number(),

      is_custom_order: Joi.boolean(),

      manufacturing_time_unit: Joi.string(),
    });
  }

  static OrderQuantity() {
    return Joi.object({
      minimum: Joi.number(),

      is_set: Joi.boolean(),

      maximum: Joi.number(),
    });
  }

  static ProductPublish() {
    return Joi.object({
      product_online_date: Joi.string(),

      is_set: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string(),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Trader() {
    return Joi.object({
      address: Joi.string().required(),

      name: Joi.string().required(),
    });
  }

  static TeaserTag() {
    return Joi.object({
      url: Joi.string(),

      tag: Joi.string(),
    });
  }

  static ProductCreateUpdate() {
    return Joi.object({
      brand_uid: Joi.number().required(),

      highlights: Joi.array().items(Joi.string()),

      hsn_code: Joi.string().required(),

      _custom_json: Joi.object(),

      change_request_id: Joi.string(),

      media: Joi.array().items(this.Media1()),

      trader_type: Joi.string(),

      variants: Joi.object(),

      is_active: Joi.boolean(),

      currency: Joi.string().required(),

      no_of_boxes: Joi.number(),

      custom_order: this.CustomOrder(),

      company_id: Joi.number().required(),

      template_tag: Joi.string().required(),

      item_type: Joi.string().required(),

      item_code: Joi.string().required(),

      moq: this.OrderQuantity(),

      product_group_tag: Joi.array().items(Joi.string()),

      product_publish: this.ProductPublish(),

      is_dependent: Joi.boolean(),

      size_guide: Joi.string(),

      return_config: this.ReturnConfig(),

      uid: Joi.number(),

      multi_size: Joi.boolean(),

      requester: Joi.string(),

      departments: Joi.array().items(Joi.number()).required(),

      country_of_origin: Joi.string().required(),

      name: Joi.string().required(),

      tags: Joi.array().items(Joi.string()),

      short_description: Joi.string(),

      trader: this.Trader(),

      is_image_less_product: Joi.boolean(),

      is_set: Joi.boolean(),

      category_slug: Joi.string().required(),

      teaser_tag: this.TeaserTag(),

      description: Joi.string(),

      slug: Joi.string().required(),
    });
  }

  static PageData() {
    return Joi.object({
      current: Joi.string(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static Logo() {
    return Joi.object({
      aspect_ratio_f: Joi.number(),

      secure_url: Joi.string(),

      aspect_ratio: Joi.string(),

      url: Joi.string(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: this.Logo(),

      name: Joi.string(),

      uid: Joi.number(),
    });
  }

  static ProductPublished() {
    return Joi.object({
      product_online_date: Joi.number(),

      is_set: Joi.boolean(),
    });
  }

  static VerifiedBy() {
    return Joi.object({
      username: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static UserCommon() {
    return Joi.object({
      username: Joi.string(),

      user_id: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static Attributes() {
    return Joi.object({
      meta_nature: Joi.string(),

      verified_by: this.VerifiedBy(),

      verified_on: Joi.string(),

      gender: Joi.array().items(Joi.string()),

      essential: Joi.string(),

      material: Joi.string(),

      stage: Joi.string(),

      primary_color: Joi.string(),

      image_nature: Joi.string(),

      created_on: Joi.string(),

      modified_on: Joi.string(),

      neck_type: Joi.string(),

      sleeve_length: Joi.string(),

      l3_mapping: Joi.array().items(Joi.string()),

      color: Joi.string(),

      product_fit: Joi.string(),

      created_by: this.UserCommon(),

      modified_by: this.UserCommon(),

      primary_material: Joi.string(),

      pattern: Joi.string(),

      is_image_less_product: Joi.boolean(),
    });
  }

  static Product() {
    return Joi.object({
      highlights: Joi.string(),

      hsn_code: Joi.string(),

      media: Joi.array().items(Joi.string()),

      brand: this.Brand(),

      is_active: Joi.boolean(),

      currency: Joi.string(),

      company_id: Joi.number(),

      template_tag: Joi.string(),

      item_type: Joi.string(),

      item_code: Joi.string(),

      id: Joi.string(),

      size_guide: Joi.string(),

      product_publish: this.ProductPublished(),

      attributes: this.Attributes(),

      uid: Joi.number(),

      multi_size: Joi.boolean(),

      slug: Joi.string(),

      all_sizes: Joi.array().items(Joi.string()),

      departments: Joi.array().items(Joi.number()),

      country_of_origin: Joi.string(),

      name: Joi.string(),

      sizes: Joi.array().items(Joi.object()),

      is_set: Joi.boolean(),

      category_slug: Joi.string(),

      description: Joi.string(),

      is_dependent: Joi.boolean(),

      images: Joi.array().items(Joi.string()),
    });
  }

  static ProductListingResponse() {
    return Joi.object({
      page: this.PageData(),

      items: Joi.array().items(this.Product()),
    });
  }

  static ValidateProduct() {
    return Joi.object({
      valid: Joi.boolean(),
    });
  }

  static BulkJob() {
    return Joi.object({
      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.object()),

      company_id: Joi.number().required(),

      template_tag: Joi.string(),

      cancelled_records: Joi.array().items(Joi.object()),

      modified_by: this.UserInfo1(),

      custom_template_tag: Joi.string(),

      stage: Joi.string(),

      failed: Joi.number(),

      total: Joi.number().required(),

      cancelled: Joi.number(),

      file_path: Joi.string(),

      created_on: Joi.string().required(),

      modified_on: Joi.string(),

      created_by: this.UserInfo1(),

      is_active: Joi.boolean(),

      tracking_url: Joi.string(),
    });
  }

  static UserDetail() {
    return Joi.object({
      username: Joi.string(),

      full_name: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static ProductBulkRequest() {
    return Joi.object({
      succeed: Joi.number(),

      failed_records: Joi.array().items(Joi.string()),

      company_id: Joi.number(),

      template_tag: Joi.string(),

      modified_by: this.UserDetail(),

      template: this.ProductTemplate(),

      stage: Joi.string(),

      failed: Joi.number(),

      created_on: Joi.string(),

      total: Joi.number(),

      file_path: Joi.string(),

      cancelled: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string()),

      modified_on: Joi.string(),

      created_by: this.UserDetail(),

      is_active: Joi.boolean(),
    });
  }

  static ProductBulkRequestList() {
    return Joi.object({
      page: this.PageData(),

      items: this.ProductBulkRequest(),
    });
  }

  static BulkProductRequest() {
    return Joi.object({
      template_tag: Joi.string().required(),

      batch_id: Joi.string().required(),

      data: Joi.array().items(Joi.object()).required(),

      company_id: Joi.number().required(),
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

  static ProductBulkAssets() {
    return Joi.object({
      url: Joi.string().required(),

      user: Joi.object().required(),

      company_id: Joi.number(),
    });
  }

  static Items() {
    return Joi.object({
      succeed: Joi.number(),

      retry: Joi.number(),

      failed_records: Joi.array().items(Joi.string()),

      company_id: Joi.number(),

      cancelled_records: Joi.array().items(Joi.string()),

      modified_by: this.UserCommon(),

      stage: Joi.string(),

      failed: Joi.number(),

      id: Joi.string(),

      file_path: Joi.string(),

      total: Joi.number(),

      cancelled: Joi.number(),

      created_on: Joi.string(),

      modified_on: Joi.string(),

      created_by: this.UserCommon(),

      is_active: Joi.boolean(),

      tracking_url: Joi.string(),
    });
  }

  static BulkAssetResponse() {
    return Joi.object({
      page: this.PageData(),

      items: Joi.array().items(this.Items()),
    });
  }

  static ItemQuery() {
    return Joi.object({
      brand_uid: Joi.number(),

      uid: Joi.number(),

      item_code: Joi.string(),
    });
  }

  static SetSize() {
    return Joi.object({
      size: Joi.string().required(),

      pieces: Joi.number().required(),
    });
  }

  static SizeDistribution() {
    return Joi.object({
      sizes: Joi.array().items(this.SetSize()).required(),
    });
  }

  static InventorySet() {
    return Joi.object({
      size_distribution: this.SizeDistribution().required(),

      quantity: Joi.number(),
    });
  }

  static GTIN() {
    return Joi.object({
      gtin_type: Joi.string().required(),

      primary: Joi.boolean(),

      gtin_value: Joi.string().required(),
    });
  }

  static InvSize() {
    return Joi.object({
      price_transfer: Joi.number(),

      currency: Joi.string().required(),

      set: this.InventorySet(),

      price: Joi.number().required(),

      identifiers: Joi.array().items(this.GTIN()).required(),

      item_weight: Joi.number(),

      store_code: Joi.string().required(),

      item_height: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string(),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      item_weight_unit_of_measure: Joi.string(),

      quantity: Joi.number().required(),

      size: Joi.string().required(),

      item_width: Joi.number(),

      item_length: Joi.number(),
    });
  }

  static InventoryRequest() {
    return Joi.object({
      item: this.ItemQuery().required(),

      sizes: Joi.array().items(this.InvSize()).required(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryRequest1() {
    return Joi.object({
      page_no: Joi.number(),

      page_size: Joi.number(),

      total: Joi.number(),

      search: Joi.string(),

      size: Joi.string(),
    });
  }

  static CommonResponse() {
    return Joi.object({
      success: Joi.string(),
    });
  }

  static BulkRequestGet() {
    return Joi.object({
      page_no: Joi.number(),

      page_size: Joi.number(),

      template_tag: Joi.string(),

      custom_template_tag: Joi.string(),

      stage: Joi.string(),

      end_date: Joi.string(),

      start_date: Joi.string(),

      total: Joi.number(),

      search: Joi.string(),
    });
  }

  static Size1() {
    return Joi.object({
      price_transfer: Joi.number(),

      currency: Joi.string().required(),

      seller_identifier: Joi.string().required(),

      set: this.InventorySet(),

      price: Joi.number().required(),

      identifiers: Joi.array().items(Joi.object()),

      item_weight: Joi.number(),

      store_code: Joi.string().required(),

      item_height: Joi.number(),

      item_dimensions_unit_of_measure: Joi.string(),

      price_effective: Joi.number().required(),

      is_set: Joi.boolean(),

      item_weight_unit_of_measure: Joi.string(),

      quantity: Joi.number().required(),

      size: Joi.string(),

      item_width: Joi.number(),

      item_length: Joi.number(),
    });
  }

  static InventoryBulkRequest() {
    return Joi.object({
      sizes: Joi.array().items(this.Size1()).required(),

      batch_id: Joi.string().required(),

      user: Joi.object(),

      company_id: Joi.number().required(),
    });
  }

  static InventoryExportRequest() {
    return Joi.object({
      store: Joi.array().items(Joi.number()),

      type: Joi.string(),

      brand: Joi.array().items(Joi.number()),
    });
  }

  static InventoryExportJob() {
    return Joi.object({
      seller_id: Joi.number().required(),

      trigger_on: Joi.string(),

      request_params: Joi.object(),

      url: Joi.string(),

      completed_on: Joi.string(),

      task_id: Joi.string().required(),

      status: Joi.string(),
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
      data: Joi.array().items(this.FilerList()),

      multivalues: Joi.boolean(),
    });
  }

  static HsnUpsert() {
    return Joi.object({
      uid: Joi.number(),

      hs2_code: Joi.string().required(),

      company_id: Joi.number().required(),

      tax_on_mrp: Joi.boolean().required(),

      hsn_code: Joi.string().required(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      tax1: Joi.number().required(),

      threshold1: Joi.number().required(),

      is_active: Joi.boolean().required(),

      threshold2: Joi.number(),
    });
  }

  static HsnCodesObject() {
    return Joi.object({
      uid: Joi.number(),

      hs2_code: Joi.string(),

      company_id: Joi.number(),

      tax_on_mrp: Joi.boolean(),

      hsn_code: Joi.string(),

      tax_on_esp: Joi.boolean(),

      tax2: Joi.number(),

      tax1: Joi.number(),

      threshold1: Joi.number(),

      is_active: Joi.boolean(),

      threshold2: Joi.number(),
    });
  }

  static HsnCode() {
    return Joi.object({
      data: this.HsnCodesObject(),
    });
  }

  static PageResponse() {
    return Joi.object({
      current: Joi.string(),

      has_previous: Joi.boolean(),

      item_total: Joi.number(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static HsnCodesListingResponse() {
    return Joi.object({
      page: this.PageResponse(),

      items: Joi.array().items(this.HsnCodesObject()),
    });
  }

  static BulkHsnUpsert() {
    return Joi.object({
      data: Joi.array().items(this.HsnUpsert()).required(),
    });
  }

  static BulkHsnResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static BusinessCountryInfo() {
    return Joi.object({
      country: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static CompanyAddress() {
    return Joi.object({
      state: Joi.string().required(),

      pincode: Joi.number().required(),

      city: Joi.string().required(),

      latitude: Joi.number().required(),

      address2: Joi.string(),

      country: Joi.string().required(),

      country_code: Joi.string(),

      address1: Joi.string().required(),

      landmark: Joi.string(),

      longitude: Joi.number().required(),
    });
  }

  static ReferralInfo() {
    return Joi.object({
      referral_code: Joi.string(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string(),

      type: Joi.string().required(),

      legal_name: Joi.string().required(),

      value: Joi.string().required(),

      verified: Joi.boolean(),
    });
  }

  static CompanyStoreSerializerRequest() {
    return Joi.object({
      business_info: Joi.string(),

      business_country_info: this.BusinessCountryInfo().required(),

      address: this.CompanyAddress().required(),

      warnings: Joi.object(),

      name: Joi.string().required(),

      referral_info: this.ReferralInfo(),

      franchise_enabled: Joi.boolean(),

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),

      document: this.Document().required(),

      notification_emails: Joi.array().items(Joi.string()),

      business_type: Joi.string().required(),
    });
  }

  static SellerPhoneNumber() {
    return Joi.object({
      number: Joi.string().required(),

      country_code: Joi.number().required(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string()),

      phone: Joi.array().items(this.SellerPhoneNumber()),
    });
  }

  static BusinessCountryInfo1() {
    return Joi.object({
      country: Joi.string(),

      country_code: Joi.string(),
    });
  }

  static GetAddressSerializer() {
    return Joi.object({
      state: Joi.string(),

      pincode: Joi.number(),

      city: Joi.string(),

      latitude: Joi.number(),

      address2: Joi.string(),

      address_type: Joi.string(),

      country: Joi.string(),

      country_code: Joi.string(),

      address1: Joi.string(),

      landmark: Joi.string(),

      longitude: Joi.number(),
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

  static GetCompanyProfileSerializerResponse() {
    return Joi.object({
      contact_details: this.ContactDetails(),

      modified_on: Joi.string(),

      notification_emails: Joi.array().items(Joi.string()),

      business_country_info: this.BusinessCountryInfo1(),

      created_by: this.UserSerializer(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      created_on: Joi.string(),

      business_type: Joi.string().required(),

      verified_by: this.UserSerializer(),

      verified_on: Joi.string(),

      documents: Joi.array().items(this.Document()),

      name: Joi.string(),

      business_details: this.BusinessDetails(),

      uid: Joi.number().required(),

      company_type: Joi.string().required(),

      business_info: Joi.string(),

      modified_by: this.UserSerializer(),

      warnings: Joi.object(),

      franchise_enabled: Joi.boolean(),

      stage: Joi.string(),
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
      store: this.DocumentsObj(),

      store_documents: this.DocumentsObj(),

      brand: this.DocumentsObj(),

      product: this.DocumentsObj(),

      stage: Joi.string(),

      uid: Joi.number(),

      company_documents: this.DocumentsObj(),
    });
  }

  static BrandBannerSerializer() {
    return Joi.object({
      portrait: Joi.string(),

      landscape: Joi.string(),
    });
  }

  static CreateUpdateBrandRequestSerializer() {
    return Joi.object({
      banner: this.BrandBannerSerializer(),

      _locale_language: Joi.object(),

      company_id: Joi.number(),

      brand_tier: Joi.string(),

      logo: Joi.string().required(),

      name: Joi.string().required(),

      _custom_json: Joi.object(),

      uid: Joi.number(),

      description: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),
    });
  }

  static UserSerializer1() {
    return Joi.object({
      contact: Joi.string(),

      user_id: Joi.string(),

      username: Joi.string(),
    });
  }

  static GetBrandResponseSerializer() {
    return Joi.object({
      banner: this.BrandBannerSerializer(),

      _locale_language: Joi.object(),

      verified_on: Joi.string(),

      modified_by: this.UserSerializer1(),

      reject_reason: Joi.string(),

      logo: Joi.string(),

      created_by: this.UserSerializer1(),

      slug_key: Joi.string(),

      name: Joi.string().required(),

      modified_on: Joi.string(),

      warnings: Joi.object(),

      _custom_json: Joi.object(),

      stage: Joi.string(),

      uid: Joi.number(),

      description: Joi.string(),

      created_on: Joi.string(),

      synonyms: Joi.array().items(Joi.string()),

      verified_by: this.UserSerializer1(),
    });
  }

  static CompanyBrandPostRequestSerializer() {
    return Joi.object({
      company: Joi.number().required(),

      uid: Joi.number(),

      brands: Joi.array().items(Joi.number()).required(),
    });
  }

  static GetCompanySerializer() {
    return Joi.object({
      verified_on: Joi.string(),

      modified_by: this.UserSerializer(),

      reject_reason: Joi.string(),

      created_by: this.UserSerializer(),

      name: Joi.string(),

      modified_on: Joi.string(),

      business_type: Joi.string(),

      stage: Joi.string(),

      uid: Joi.number(),

      company_type: Joi.string(),

      addresses: Joi.array().items(this.GetAddressSerializer()),

      created_on: Joi.string(),

      verified_by: this.UserSerializer(),
    });
  }

  static CompanyBrandSerializer() {
    return Joi.object({
      verified_on: Joi.string(),

      modified_by: this.UserSerializer1(),

      brand: this.GetBrandResponseSerializer(),

      reject_reason: Joi.string(),

      created_by: this.UserSerializer1(),

      company: this.GetCompanySerializer(),

      warnings: Joi.object(),

      modified_on: Joi.string(),

      stage: Joi.string(),

      uid: Joi.number(),

      created_on: Joi.string(),

      verified_by: this.UserSerializer1(),
    });
  }

  static CompanyBrandListSerializer() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.CompanyBrandSerializer()),
    });
  }

  static GetAddressSerializer1() {
    return Joi.object({
      state: Joi.string(),

      pincode: Joi.number(),

      city: Joi.string(),

      latitude: Joi.number(),

      address2: Joi.string(),

      address_type: Joi.string(),

      country: Joi.string(),

      country_code: Joi.string(),

      address1: Joi.string(),

      landmark: Joi.string(),

      longitude: Joi.number(),
    });
  }

  static LocationManagerSerializer() {
    return Joi.object({
      mobile_no: this.SellerPhoneNumber().required(),

      email: Joi.string(),

      name: Joi.string(),
    });
  }

  static InvoiceCredSerializer() {
    return Joi.object({
      password: Joi.string(),

      enabled: Joi.boolean(),

      username: Joi.string(),
    });
  }

  static InvoiceDetailsSerializer() {
    return Joi.object({
      e_waybill: this.InvoiceCredSerializer(),

      e_invoice: this.InvoiceCredSerializer(),
    });
  }

  static LocationTimingSerializer() {
    return Joi.object({
      hour: Joi.number(),

      minute: Joi.number(),
    });
  }

  static LocationDayWiseSerializer() {
    return Joi.object({
      open: Joi.boolean().required(),

      opening: this.LocationTimingSerializer(),

      closing: this.LocationTimingSerializer(),

      weekday: Joi.string().required(),
    });
  }

  static ProductReturnConfigSerializer() {
    return Joi.object({
      on_same_store: Joi.boolean(),

      store_uid: Joi.number(),
    });
  }

  static LocationSerializer() {
    return Joi.object({
      code: Joi.string().required(),

      documents: Joi.array().items(this.Document()),

      address: this.GetAddressSerializer1().required(),

      company: Joi.number().required(),

      name: Joi.string().required(),

      warnings: Joi.object(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      _custom_json: Joi.object(),

      store_type: Joi.string(),

      manager: this.LocationManagerSerializer(),

      uid: Joi.number(),

      stage: Joi.string(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      display_name: Joi.string().required(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),

      notification_emails: Joi.array().items(Joi.string()),

      product_return_config: this.ProductReturnConfigSerializer(),
    });
  }

  static LocationIntegrationType() {
    return Joi.object({
      inventory: Joi.string(),

      order: Joi.string(),
    });
  }

  static GetLocationSerializer() {
    return Joi.object({
      company: this.GetCompanySerializer(),

      modified_on: Joi.string(),

      _custom_json: Joi.object(),

      gst_credentials: this.InvoiceDetailsSerializer(),

      notification_emails: Joi.array().items(Joi.string()),

      created_by: this.UserSerializer1(),

      store_type: Joi.string(),

      manager: this.LocationManagerSerializer(),

      created_on: Joi.string(),

      verified_by: this.UserSerializer1(),

      verified_on: Joi.string(),

      documents: Joi.array().items(this.Document()),

      phone_number: Joi.string().required(),

      name: Joi.string().required(),

      contact_numbers: Joi.array().items(this.SellerPhoneNumber()),

      uid: Joi.number(),

      product_return_config: this.ProductReturnConfigSerializer(),

      modified_by: this.UserSerializer1(),

      integration_type: this.LocationIntegrationType(),

      code: Joi.string().required(),

      address: this.GetAddressSerializer().required(),

      warnings: Joi.object(),

      stage: Joi.string(),

      display_name: Joi.string().required(),

      timing: Joi.array().items(this.LocationDayWiseSerializer()),
    });
  }

  static LocationListSerializer() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.GetLocationSerializer()),
    });
  }

  static FailedResponse() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static CDN() {
    return Joi.object({
      url: Joi.string().required(),
    });
  }

  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),

      url: Joi.string().required(),
    });
  }

  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().required(),

      file_path: Joi.string().required(),

      content_type: Joi.string().required(),

      method: Joi.string().required(),

      namespace: Joi.string().required(),

      operation: Joi.string().required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),
    });
  }

  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().required(),

      content_type: Joi.string().required(),

      size: Joi.number().required(),

      tags: Joi.array().items(Joi.string()),
    });
  }

  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().required(),

      file_name: Joi.string().required(),

      file_path: Joi.string().required(),

      content_type: Joi.string().required(),

      method: Joi.string().required(),

      namespace: Joi.string().required(),

      operation: Joi.string().required(),

      size: Joi.number().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      success: Joi.string().required(),

      tags: Joi.array().items(Joi.string()),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),
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
      id: Joi.string().required(),

      name: Joi.string().required(),

      data: this.BulkRequest().required(),

      opts: this.Opts().required(),

      progress: Joi.number().required(),

      delay: Joi.number().required(),

      timestamp: Joi.number().required(),

      attempts_made: Joi.number().required(),

      stacktrace: Joi.array().items(Joi.string()),

      finished_on: Joi.number().required(),

      processed_on: Joi.number().required(),
    });
  }

  static BulkResponse() {
    return Joi.object({
      tracking_url: Joi.string().required(),

      task: this.CopyFileTask().required(),
    });
  }

  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  static Destination() {
    return Joi.object({
      namespace: Joi.string().required(),

      rewrite: Joi.string().required(),

      basepath: Joi.string(),
    });
  }

  static BulkRequest() {
    return Joi.object({
      urls: Joi.array().items(Joi.string()).required(),

      destination: this.Destination().required(),

      configuration: this.ReqConfiguration(),
    });
  }

  static Urls() {
    return Joi.object({
      url: Joi.string().required(),

      signed_url: Joi.string().required(),

      expiry: Joi.number().required(),
    });
  }

  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(this.Urls()).required(),
    });
  }

  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),

      urls: Joi.array().items(Joi.string()).required(),
    });
  }

  static DbRecord() {
    return Joi.object({
      success: Joi.boolean().required(),

      tags: Joi.array().items(Joi.string()).required(),

      _id: Joi.string().required(),

      file_name: Joi.string().required(),

      operation: Joi.string(),

      namespace: Joi.string().required(),

      content_type: Joi.string().required(),

      file_path: Joi.string().required(),

      upload: this.Upload().required(),

      cdn: this.CDN().required(),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),
    });
  }

  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(this.DbRecord()).required(),

      page: this.Page().required(),
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

      force_web: Joi.boolean(),
    });
  }

  static CampaignShortLink() {
    return Joi.object({
      source: Joi.string(),

      medium: Joi.string(),
    });
  }

  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string(),
    });
  }

  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string(),

      description: Joi.string(),

      image: Joi.string(),
    });
  }

  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().required(),

      url: Joi.string().required(),

      hash: Joi.string(),

      active: Joi.boolean(),

      expire_at: Joi.string(),

      enable_tracking: Joi.boolean(),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
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

      created_by: Joi.string(),

      app_redirect: Joi.boolean(),

      fallback: Joi.string(),

      active: Joi.boolean(),

      _id: Joi.string(),

      enable_tracking: Joi.boolean(),

      expire_at: Joi.string(),

      application: Joi.string(),

      user_id: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      personalized: Joi.boolean(),

      campaign: this.CampaignShortLink(),

      redirects: this.Redirects(),

      attribution: this.Attribution(),

      social_media_tags: this.SocialMediaTags(),

      count: Joi.number(),
    });
  }

  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(this.ShortLinkRes()),

      page: this.Page(),
    });
  }

  static ErrorRes() {
    return Joi.object({
      message: Joi.string(),
    });
  }

  static DataTresholdDTO() {
    return Joi.object({
      min_price: Joi.number(),

      safe_stock: Joi.number(),

      period_threshold: Joi.number(),

      period_threshold_type: Joi.string(),

      period_type_list: Joi.array().items(this.GenericDTO()),
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
      integration: Joi.string().required(),

      integration_data: Joi.object(),

      company_name: Joi.string(),

      company_id: Joi.number().required(),

      task_details: this.TaskDTO(),

      threshold_details: this.DataTresholdDTO(),

      job_code: Joi.string(),

      alias: Joi.string(),
    });
  }

  static TaskDTO() {
    return Joi.object({
      type: Joi.number(),

      group_list: Joi.array().items(this.GenericDTO()),
    });
  }

  static ResponseEnvelopeString() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string(),

      items: Joi.string(),

      payload: Joi.string(),

      trace_id: Joi.string(),

      page: this.Page(),
    });
  }

  static AWSS3config() {
    return Joi.object({
      bucket: Joi.string(),

      region: Joi.string(),

      dir: Joi.string(),

      access_key: Joi.string(),

      secret_key: Joi.string(),

      local_file_path: Joi.string(),

      archive_path: Joi.string(),

      archive: Joi.boolean(),

      delete: Joi.boolean(),

      unzip: Joi.boolean(),

      zip_format: Joi.string(),

      file_regex: Joi.string(),

      archive_config: this.ArchiveConfig(),
    });
  }

  static ArchiveConfig() {
    return Joi.object({
      delete: Joi.boolean(),

      archive: Joi.boolean(),

      archive_dir: Joi.string(),
    });
  }

  static Audit() {
    return Joi.object({
      created_by: Joi.string(),

      modified_by: Joi.string(),

      created_on: Joi.string(),

      modified_on: Joi.string(),
    });
  }

  static CatalogMasterConfig() {
    return Joi.object({
      source_slug: Joi.string(),
    });
  }

  static CompanyConfig() {
    return Joi.object({
      company_id: Joi.number(),

      exclude_steps: Joi.array().items(Joi.number()),

      hidden_closet_keys: Joi.array().items(Joi.string()),

      open_tags: Joi.object(),

      tax_identifiers: Joi.array().items(Joi.string()),

      delete_quantity_threshold: Joi.number(),
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

      driver_class: Joi.string(),

      jdbc_url: Joi.string(),

      optional_properties: Joi.object(),
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

      intf_article_id: this.PropBeanDTO(),

      price_effective: this.PropBeanDTO(),

      quantity: this.PropBeanDTO(),
    });
  }

  static DocMappingConfig() {
    return Joi.object({
      properties: Joi.object(),

      junk_data_threshold_count: Joi.number(),

      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),

      unwind_field: Joi.string(),

      default_headers: this.DefaultHeadersDTO(),
    });
  }

  static EmailConfig() {
    return Joi.object({
      recepient: Joi.string(),

      host: Joi.string(),

      username: Joi.string(),

      password: Joi.string(),

      unzip: Joi.boolean(),

      read_from_content: Joi.boolean(),

      filter_based_on_recepients: Joi.boolean(),

      pcol: Joi.string(),

      subject_line_regex: Joi.string(),

      sender_address: Joi.string(),

      local_dir: Joi.string(),

      folder_name_hierarchies: Joi.array().items(Joi.string()),

      attachment_regex: Joi.string(),

      body_content_regex: Joi.string(),

      password_protected: Joi.boolean(),

      zip_format: Joi.string(),

      attachment_mandate: Joi.boolean(),

      filter_files_after_extraction: Joi.boolean(),

      archive_config: this.ArchiveConfig(),

      read_all_unread_mails: Joi.boolean(),

      content_type: Joi.string(),

      downloadable_link: Joi.boolean(),

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

      local_dir: Joi.string(),

      remote_dir: Joi.string(),

      zip_file_regex: Joi.string(),

      archive_config: this.ArchiveConfig(),

      file_regex: Joi.string(),

      zip_format: Joi.string(),

      read_all_files: Joi.boolean(),
    });
  }

  static FileConfig() {
    return Joi.object({
      delimiter: Joi.string(),

      charset: Joi.string(),

      properties: Joi.object(),

      file_has_header: Joi.boolean(),

      header_index: Joi.number(),

      header_array: Joi.array().items(Joi.string()),

      data_start_index: Joi.number(),

      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),

      junk_data_threshold_count: Joi.number(),

      file_type: Joi.string(),

      line_validity_check: Joi.boolean(),

      sheet_names: Joi.array().items(Joi.string()),

      read_all_sheets: Joi.boolean(),

      quote_char: Joi.string(),

      escape_char: Joi.string(),

      default_headers: this.DefaultHeadersDTO(),
    });
  }

  static GoogleSpreadSheetConfig() {
    return Joi.object({
      range: Joi.string(),

      sheet_id: Joi.string(),

      client_secret_location: Joi.string(),

      cred_storage_directory: Joi.string(),

      local_dir: Joi.string(),

      archive_config: this.ArchiveConfig(),
    });
  }

  static HttpConfig() {
    return Joi.object({
      hosturl: Joi.string(),

      username: Joi.string(),

      password: Joi.string(),

      request_params: Joi.object(),

      http_method: Joi.string(),

      request_payload: Joi.string(),

      local_path: Joi.string(),

      archive_config: this.ArchiveConfig(),
    });
  }

  static JobConfig() {
    return Joi.object({
      _id: Joi.number(),

      job_code: Joi.string(),

      task_type: Joi.string(),

      sync_delay: Joi.number(),

      cron_expression: Joi.string(),

      store_filter: this.StoreFilter(),

      process_config: this.ProcessConfig(),

      store_config: Joi.array().items(this.StoreConfig()),

      properties: Joi.object(),

      immediate_first_run: Joi.boolean(),

      disable: Joi.boolean(),

      dependent_job_codes: Joi.array().items(Joi.string()),

      company_config: Joi.array().items(this.CompanyConfig()),

      company_ids: Joi.array().items(Joi.number()),

      tax_identifiers: Joi.array().items(Joi.string()),

      priority: Joi.string(),

      period_threshold: Joi.number(),

      period_threshold_type: Joi.string(),

      db_connection_profile: this.DBConnectionProfile(),

      params: Joi.object(),

      open_tags: Joi.object(),

      delete_quantity_threshold: Joi.number(),

      catalog_master_config: this.CatalogMasterConfig(),

      aggregator_types: Joi.array().items(Joi.string()),

      integration_type: Joi.string(),

      min_price: Joi.number(),

      audit: this.Audit(),

      version: Joi.number(),

      alias: Joi.string(),
    });
  }

  static JobConfigRawDTO() {
    return Joi.object({
      integration: Joi.string().required(),

      company_name: Joi.string().required(),

      company_id: Joi.number().required(),

      data: this.JobConfig(),
    });
  }

  static JsonDocConfig() {
    return Joi.object({
      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),
    });
  }

  static LocalFileConfig() {
    return Joi.object({
      retries: Joi.number(),

      interval: Joi.number(),

      local_dir: Joi.string(),

      working_dir: Joi.string(),

      unzip: Joi.boolean(),

      zip_file_regex: Joi.string(),

      file_regex: Joi.string(),

      zip_format: Joi.string(),

      archive_config: this.ArchiveConfig(),

      read_all_files: Joi.boolean(),
    });
  }

  static MongoDocConfig() {
    return Joi.object({
      collection_name: Joi.string(),

      find_query: Joi.object(),

      projection_query: Joi.object(),

      prop_bean_configs: Joi.array().items(this.PropBeanConfig()),

      aggregate_pipeline: Joi.array().items(Joi.object()),

      skip_save: Joi.boolean(),
    });
  }

  static OAuthConfig() {
    return Joi.object({
      limit: Joi.number(),

      pages: Joi.number(),

      interval: Joi.number(),

      consumer_key: Joi.string(),

      consumer_secret: Joi.string(),

      token: Joi.string(),

      token_secret: Joi.string(),

      rest_url: Joi.string(),

      rest_base_url: Joi.string(),

      function_name: Joi.string(),
    });
  }

  static ProcessConfig() {
    return Joi.object({
      db_config: this.DBConfig(),

      db_param_config: this.DBParamConfig(),

      sftp_config: this.SFTPConfig(),

      aws_s3_config: this.AWSS3config(),

      mongo_doc_config: this.MongoDocConfig(),

      ftp_config: this.FTPConfig(),

      email_config: this.EmailConfig(),

      file_config: this.FileConfig(),

      json_doc_config: this.JsonDocConfig(),

      doc_mapping_config: this.DocMappingConfig(),

      task_step_config: this.TaskStepConfig(),

      http_config: this.HttpConfig(),

      local_file_config: this.LocalFileConfig(),

      oauth_config: this.OAuthConfig(),

      google_spreadsheet_config: this.GoogleSpreadSheetConfig(),
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

      source_field: Joi.string(),

      source_fields: Joi.array().items(Joi.string()),

      destination_field: Joi.string(),

      data_type: Joi.string(),

      default_value: Joi.object(),

      const_value: Joi.object(),

      concat_str: Joi.string(),

      function_name: Joi.string(),

      transformer_name: Joi.string(),

      all_param_function_name: Joi.string(),

      sub_separator: Joi.string(),

      index_field: Joi.string(),

      ignore_if_not_exists: Joi.boolean(),

      identifier_type: Joi.string(),

      projection_query: Joi.object(),

      enrich_from_master: Joi.boolean(),
    });
  }

  static PropBeanDTO() {
    return Joi.object({
      required: Joi.boolean(),

      optional: Joi.boolean(),

      include: Joi.boolean(),

      source_field: Joi.string(),

      source_fields: Joi.array().items(Joi.string()),

      destination_field: Joi.string(),

      data_type: Joi.string(),

      default_value: Joi.object(),

      const_value: Joi.object(),

      concat_str: Joi.string(),

      function_name: Joi.string(),

      transformer_name: Joi.string(),

      all_param_function_name: Joi.string(),

      sub_separator: Joi.string(),

      index_field: Joi.string(),

      ignore_if_not_exists: Joi.boolean(),

      identifier_type: Joi.string(),

      projection_query: Joi.object(),

      enrich_from_master: Joi.boolean(),
    });
  }

  static ResponseEnvelopeListJobConfigRawDTO() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string(),

      items: Joi.array().items(this.JobConfigRawDTO()),

      payload: Joi.array().items(this.JobConfigRawDTO()),

      trace_id: Joi.string(),

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

      private_key_path: Joi.string(),

      strict_host_key_checking: Joi.boolean(),

      local_dir: Joi.string(),

      remote_dir: Joi.string(),

      password_protected: Joi.boolean(),

      zip_file_regex: Joi.string(),

      file_regex: Joi.string(),

      zip_format: Joi.string(),

      archive_config: this.ArchiveConfig(),

      read_all_files: Joi.boolean(),
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
      job_code: Joi.string(),

      storeid: Joi.string(),

      store_alias: Joi.string(),

      store_file_regex: Joi.string(),

      store_file_name: Joi.string(),

      process_config: this.ProcessConfig(),

      properties: Joi.object(),
    });
  }

  static StoreFilter() {
    return Joi.object({
      include_tags: Joi.array().items(Joi.string()),

      exclude_tags: Joi.array().items(Joi.string()),

      query: Joi.object(),
    });
  }

  static TaskConfig() {
    return Joi.object({
      name: Joi.string(),

      task_config_id: Joi.number(),

      task_params: Joi.array().items(this.TaskParam()),
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
      task_configs: Joi.array().items(this.TaskConfig()),

      task_config_ids: Joi.array().items(Joi.number()),

      task_config_group_ids: Joi.array().items(Joi.number()),
    });
  }

  static ResponseEnvelopeListJobConfigDTO() {
    return Joi.object({
      timestamp: Joi.string(),

      status: Joi.number(),

      error: Joi.string(),

      exception: Joi.string(),

      message: Joi.string(),

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string(),

      items: Joi.array().items(this.JobConfigDTO()),

      payload: Joi.array().items(this.JobConfigDTO()),

      trace_id: Joi.string(),

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

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string(),

      items: this.JobConfigDTO(),

      payload: this.JobConfigDTO(),

      trace_id: Joi.string(),

      page: this.Page(),
    });
  }

  static JobConfigListDTO() {
    return Joi.object({
      code: Joi.string(),

      alias: Joi.string(),

      modified_by: Joi.string(),

      created_by: Joi.string(),

      modified_on: Joi.string(),

      created_on: Joi.string(),

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

      total_time_taken_in_millis: Joi.number(),

      http_status: Joi.string(),

      items: Joi.array().items(this.JobConfigListDTO()),

      payload: Joi.array().items(this.JobConfigListDTO()),

      trace_id: Joi.string(),

      page: this.Page(),
    });
  }

  static ApplicationInventory() {
    return Joi.object({
      inventory: this.AppInventoryConfig(),

      authentication: this.AuthenticationConfig(),

      article_assignment: this.ArticleAssignmentConfig(),

      reward_points: this.RewardPointsConfig(),

      cart: this.AppCartConfig(),

      payment: this.AppPaymentConfig(),

      order: this.AppOrderConfig(),

      logistics: this.AppLogisticsConfig(),

      business: Joi.string(),

      comms_enabled: Joi.boolean(),

      platforms: Joi.array().items(Joi.string()),

      _id: Joi.string(),

      loyalty_points: this.LoyaltyPoints(),

      app: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      modified_by: Joi.string(),
    });
  }

  static AppInventoryConfig() {
    return Joi.object({
      brand: this.InventoryBrand(),

      store: this.InventoryStore(),

      category: this.InventoryCategory(),

      price: this.InventoryPrice(),

      discount: this.InventoryDiscount(),

      out_of_stock: Joi.boolean(),

      franchise_enabled: Joi.boolean(),

      exclude_category: Joi.array().items(Joi.any()),

      image: Joi.array().items(Joi.string()),

      company_store: Joi.array().items(Joi.any()),
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

      post_order_reassignment: Joi.boolean(),

      enforced_stores: Joi.array().items(Joi.any()),
    });
  }

  static ArticleAssignmentRules() {
    return Joi.object({
      store_priority: this.StorePriority(),
    });
  }

  static StorePriority() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.any()),
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

      auto_apply: Joi.boolean(),

      strategy_channel: Joi.string(),
    });
  }

  static AppCartConfig() {
    return Joi.object({
      delivery_charges: this.DeliveryCharges(),

      enabled: Joi.boolean(),

      max_cart_items: Joi.number(),

      min_cart_value: Joi.number(),

      bulk_coupons: Joi.boolean(),
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
      callback_url: this.CallbackUrl(),

      methods: this.Methods(),

      payment_selection_lock: this.PaymentSelectionLock(),

      mode_of_payment: Joi.string(),

      source: Joi.string(),

      enabled: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      cod_charges: Joi.number(),
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

      default_options: Joi.string(),

      payment_identifier: Joi.string(),
    });
  }

  static AppOrderConfig() {
    return Joi.object({
      enabled: Joi.boolean(),

      force_reassignment: Joi.boolean(),
    });
  }

  static AppLogisticsConfig() {
    return Joi.object({
      logistics_by_seller: Joi.boolean(),

      serviceability_check: Joi.boolean(),

      same_day_delivery: Joi.boolean(),

      dp_assignment: Joi.boolean(),
    });
  }

  static LoyaltyPoints() {
    return Joi.object({
      enabled: Joi.boolean(),

      auto_apply: Joi.boolean(),
    });
  }

  static AppInventoryPartialUpdate() {
    return Joi.object({
      reward_points: this.RewardPointsConfig(),

      cart: this.AppCartConfig(),

      payment: this.AppPaymentConfig(),

      loyalty_points: this.LoyaltyPoints(),

      comms_enabled: Joi.boolean(),
    });
  }

  static BrandCompanyInfo() {
    return Joi.object({
      company_name: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static CompanyByBrandsRequest() {
    return Joi.object({
      brands: Joi.number().required(),

      search_text: Joi.string(),
    });
  }

  static CompanyByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandCompanyInfo()),

      page: this.Page(),
    });
  }

  static StoreByBrandsRequest() {
    return Joi.object({
      company_id: Joi.number(),

      brands: Joi.number().required(),

      search_text: Joi.string(),
    });
  }

  static StoreByBrandsResponse() {
    return Joi.object({
      items: Joi.array().items(this.BrandStoreInfo()),

      page: this.Page(),
    });
  }

  static BrandStoreInfo() {
    return Joi.object({
      store_name: Joi.string(),

      store_id: Joi.number(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      store_address: this.OptedStoreAddress(),

      company: this.OptedCompany(),
    });
  }

  static CompanyBrandInfo() {
    return Joi.object({
      name: Joi.string(),

      value: Joi.number(),

      brand_logo_url: Joi.string(),

      brand_banner_url: Joi.string(),

      brand_banner_portrait_url: Joi.string(),
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

      page: this.Page(),
    });
  }

  static MobileAppConfiguration() {
    return Joi.object({
      is_active: Joi.boolean(),

      _id: Joi.string(),

      app_name: Joi.string(),

      landing_image: this.LandingImage(),

      splash_image: this.SplashImage(),

      application: Joi.string(),

      platform_type: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      package_name: Joi.string(),
    });
  }

  static LandingImage() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      secure_url: Joi.string(),
    });
  }

  static SplashImage() {
    return Joi.object({
      aspect_ratio: Joi.string(),

      secure_url: Joi.string(),
    });
  }

  static MobileAppConfigRequest() {
    return Joi.object({
      app_name: Joi.string(),

      landing_image: this.LandingImage(),

      splash_image: this.SplashImage(),

      is_active: Joi.boolean(),
    });
  }

  static BuildVersionHistory() {
    return Joi.object({
      versions: this.BuildVersion(),

      latest_available_version_name: Joi.string(),
    });
  }

  static BuildVersion() {
    return Joi.object({
      _id: Joi.string(),

      application: Joi.string(),

      platform_type: Joi.string(),

      build_status: Joi.string(),

      version_name: Joi.string(),

      version_code: Joi.number(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static AppSupportedCurrency() {
    return Joi.object({
      _id: Joi.string(),

      supported_currency: Joi.array().items(Joi.string()),

      application: Joi.string(),

      default_currency: this.DefaultCurrency(),

      created_at: Joi.string(),

      updated_at: Joi.string(),
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
      _id: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      decimal_digits: Joi.number(),

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
      _id: Joi.string(),
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
      domain_url: Joi.string(),
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
      domain_url: Joi.string(),

      custom: Joi.boolean(),
    });
  }

  static DomainSuggestion() {
    return Joi.object({
      name: Joi.string().required(),

      unsupported: Joi.boolean(),

      is_available: Joi.boolean().required(),

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

      page: this.Page(),
    });
  }

  static IntegrationOptIn() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string(),

      description_html: Joi.string(),

      constants: Joi.string(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string()),

      _id: Joi.string(),

      name: Joi.string(),

      meta: this.IntegrationMeta(),

      icon: Joi.string(),

      owner: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      token: Joi.string(),

      secret: Joi.string(),

      __v: Joi.number(),
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
      json_schema: this.JsonSchema(),

      browser_script: Joi.string(),
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
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string(),
    });
  }

  static InventoryValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string(),
    });
  }

  static OrderValidator() {
    return Joi.object({
      json_schema: Joi.array().items(this.JsonSchema()),

      browser_script: Joi.string(),
    });
  }

  static IntegrationMeta() {
    return Joi.object({
      is_public: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      value: Joi.string(),
    });
  }

  static Integration() {
    return Joi.object({
      validators: this.Validators(),

      description: Joi.string(),

      description_html: Joi.string(),

      constants: Joi.object(),

      companies: Joi.array().items(Joi.object()),

      support: Joi.array().items(Joi.string()),

      _id: Joi.string(),

      name: Joi.string(),

      meta: this.IntegrationMeta(),

      icon: Joi.string(),

      owner: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      token: Joi.string(),

      secret: Joi.string(),

      __v: Joi.number(),
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

      last_patch: Joi.array().items(Joi.object()),

      _id: Joi.string(),

      integration: Joi.string(),

      level: Joi.string(),

      uid: Joi.number(),

      meta: Joi.array().items(Joi.any()),

      token: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      data: Joi.object(),
    });
  }

  static OptedStoreIntegration() {
    return Joi.object({
      other_opted: Joi.boolean(),

      other_integration: this.IntegrationOptIn(),

      other_entity: this.OtherEntity(),
    });
  }

  static OtherEntity() {
    return Joi.object({
      opted: Joi.boolean(),

      permissions: Joi.array().items(Joi.string()),

      last_patch: this.LastPatch(),

      _id: Joi.string(),

      integration: Joi.string(),

      level: Joi.string(),

      uid: Joi.number(),

      data: this.OtherEntityData(),

      meta: Joi.array().items(Joi.object()),

      token: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
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
      article_identifier: Joi.string(),
    });
  }

  static App() {
    return Joi.object({
      company_id: Joi.string(),

      channel_type: Joi.string(),

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

      franchise_enabled: Joi.boolean(),

      out_of_stock: Joi.boolean(),

      payment: this.InventoryPaymentConfig(),

      article_assignment: this.InventoryArticleAssignment(),
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

      page: this.Page(),
    });
  }

  static AppInventoryCompanies() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string(),

      company_type: Joi.string(),
    });
  }

  static StoresResponse() {
    return Joi.object({
      items: this.AppInventoryStores(),

      page: this.Page(),
    });
  }

  static AppInventoryStores() {
    return Joi.object({
      _id: Joi.string(),

      modified_on: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static FilterOrderingStoreRequest() {
    return Joi.object({
      all_stores: Joi.boolean(),

      deployed_stores: Joi.array().items(Joi.number()),

      q: Joi.string(),
    });
  }

  static DeploymentMeta() {
    return Joi.object({
      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      _id: Joi.string(),

      app: Joi.string(),

      __v: Joi.number(),
    });
  }

  static OrderingStoreConfig() {
    return Joi.object({
      deployment_meta: this.DeploymentMeta(),
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

      _id: Joi.string(),

      domain: Joi.string(),

      company: this.OtherSellerCompany(),

      opt_type: Joi.string(),
    });
  }

  static OtherSellerApplications() {
    return Joi.object({
      items: Joi.array().items(this.OtherSellerApplication()),

      page: this.Page(),
    });
  }

  static OptedApplicationResponse() {
    return Joi.object({
      name: Joi.string(),

      description: Joi.string(),

      _id: Joi.string(),

      domain: Joi.string(),

      company: this.OptedCompany(),

      opted_inventory: this.OptedInventory(),

      opt_out_inventory: this.OptOutInventory(),
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
      opt_type: this.OptType(),

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

      store_code: Joi.string(),

      _id: Joi.string(),

      modified_on: Joi.string(),

      uid: Joi.number(),

      address: this.OptedStoreAddress(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      company_id: Joi.number(),
    });
  }

  static OptOutInventory() {
    return Joi.object({
      store: Joi.array().items(Joi.number()).required(),

      company: Joi.array().items(Joi.number()).required(),
    });
  }

  static ProductDetailFeature() {
    return Joi.object({
      similar: Joi.array().items(Joi.string()),

      seller_selection: Joi.boolean(),

      update_product_meta: Joi.boolean(),

      request_product: Joi.boolean(),
    });
  }

  static LaunchPage() {
    return Joi.object({
      page_type: Joi.string(),

      params: Joi.object(),

      query: Joi.object(),
    });
  }

  static LandingPageFeature() {
    return Joi.object({
      launch_page: this.LaunchPage(),

      continue_as_guest: Joi.boolean(),

      login_btn_text: Joi.string(),

      show_domain_textbox: Joi.boolean(),

      show_register_btn: Joi.boolean(),
    });
  }

  static RegistrationPageFeature() {
    return Joi.object({
      ask_store_address: Joi.boolean(),
    });
  }

  static AppFeature() {
    return Joi.object({
      product_detail: this.ProductDetailFeature(),

      landing_page: this.LandingPageFeature(),

      registration_page: this.RegistrationPageFeature(),

      home_page: this.HomePageFeature(),

      common: this.CommonFeature(),

      cart: this.CartFeature(),

      qr: this.QrFeature(),

      pcr: this.PcrFeature(),

      order: this.OrderFeature(),

      _id: Joi.string(),

      app: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static HomePageFeature() {
    return Joi.object({
      order_processing: Joi.boolean(),
    });
  }

  static CommonFeature() {
    return Joi.object({
      communication_optin_dialog: this.CommunicationOptinDialogFeature(),

      deployment_store_selection: this.DeploymentStoreSelectionFeature(),

      listing_price: this.ListingPriceFeature(),

      listing_page: this.ListingPageFeature(),

      currency: this.CurrencyFeature(),

      revenue_engine: this.RevenueEngineFeature(),

      feedback: this.FeedbackFeature(),

      compare_products: this.CompareProductsFeature(),
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
      sort_on: Joi.string(),
    });
  }

  static CurrencyFeature() {
    return Joi.object({
      value: Joi.array().items(Joi.string()),

      type: Joi.string(),

      default_currency: Joi.string(),
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
      gst_input: Joi.boolean(),

      staff_selection: Joi.boolean(),

      placing_for_customer: Joi.boolean(),

      google_map: Joi.boolean(),
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
      staff_selection: Joi.boolean(),
    });
  }

  static OrderFeature() {
    return Joi.object({
      buy_again: Joi.boolean(),
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
      _id: Joi.string(),

      is_active: Joi.boolean(),

      name: Joi.string(),

      code: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      decimal_digits: Joi.number(),

      symbol: Joi.string(),
    });
  }

  static Domain() {
    return Joi.object({
      verified: Joi.boolean(),

      is_primary: Joi.boolean(),

      is_default: Joi.boolean(),

      is_shortlink: Joi.boolean(),

      _id: Joi.string(),

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

      redirect_to: Joi.string(),

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
      secure_url: Joi.string(),
    });
  }

  static Application() {
    return Joi.object({
      website: this.ApplicationWebsite(),

      cors: this.ApplicationCors(),

      auth: this.ApplicationAuth(),

      description: Joi.string(),

      channel_type: Joi.string(),

      cache_ttl: Joi.number(),

      is_internal: Joi.boolean(),

      is_active: Joi.boolean(),

      _id: Joi.string(),

      name: Joi.string(),

      owner: Joi.string(),

      company_id: Joi.number(),

      token: Joi.string(),

      redirections: Joi.array().items(this.ApplicationRedirections()),

      meta: Joi.array().items(this.ApplicationMeta()),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),

      banner: this.SecureUrl(),

      logo: this.SecureUrl(),

      favicon: this.SecureUrl(),

      domains: Joi.array().items(this.Domain()),

      app_type: Joi.string(),

      mobile_logo: this.SecureUrl(),

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
      mode_of_payment: Joi.string(),

      source: Joi.string(),
    });
  }

  static StorePriorityRule() {
    return Joi.object({
      enabled: Joi.boolean(),

      storetype_order: Joi.array().items(Joi.string()),
    });
  }

  static ArticleAssignmentRule() {
    return Joi.object({
      store_priority: this.StorePriorityRule(),
    });
  }

  static InventoryArticleAssignment() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),

      enforced_stores: Joi.array().items(Joi.number()),

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

      address_type: Joi.string(),
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

      country_code: Joi.number(),

      phone: Joi.string(),
    });
  }

  static ApplicationInformation() {
    return Joi.object({
      address: this.InformationAddress(),

      support: this.InformationSupport(),

      social_links: this.SocialLinks(),

      links: this.Links(),

      copyright_text: Joi.string(),

      _id: Joi.string(),

      business_highlights: this.BusinessHighlights(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
    });
  }

  static InformationAddress() {
    return Joi.object({
      loc: Joi.string(),

      address_line: Joi.array().items(Joi.string()),

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

      google_plus: this.GooglePlus(),

      youtube: this.Youtube(),

      linked_in: this.LinkedIn(),

      vimeo: this.Vimeo(),

      blog_link: this.BlogLink(),
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
      _id: Joi.string(),

      title: Joi.string(),

      icon: Joi.string(),

      sub_title: Joi.string(),
    });
  }

  static ApplicationDetail() {
    return Joi.object({
      name: Joi.string().required(),

      description: Joi.string().required(),

      logo: this.SecureUrl().required(),

      mobile_logo: this.SecureUrl().required(),

      favicon: this.SecureUrl().required(),

      banner: this.SecureUrl().required(),

      domain: this.Domain(),

      domains: Joi.array().items(this.Domain()),

      _id: Joi.string(),
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

      lat_long: this.StoreLatLong(),

      address2: Joi.string(),

      pincode: Joi.number(),

      country: Joi.string(),

      city: Joi.string(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      address: this.OptedStoreAddress(),

      _id: Joi.string(),

      uid: Joi.number(),

      name: Joi.string(),

      display_name: Joi.string(),

      store_type: Joi.string(),

      store_code: Joi.string(),

      pincode: Joi.number(),

      code: Joi.string(),
    });
  }

  static OrderingStores() {
    return Joi.object({
      page: this.Page(),

      items: Joi.array().items(this.OrderingStore()),

      deployed_stores: Joi.array().items(Joi.number()),

      all_stores: Joi.boolean(),

      enabled: Joi.boolean(),

      type: Joi.string(),

      _id: Joi.string(),

      app: Joi.string(),

      __v: Joi.number(),
    });
  }

  static TokenResponse() {
    return Joi.object({
      tokens: this.Tokens(),

      _id: Joi.string(),

      application: Joi.string(),

      created_at: Joi.string(),

      updated_at: Joi.string(),

      __v: Joi.number(),
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

      fynd_rewards: this.FyndRewards(),

      auth: this.Auth(),

      google_map: this.GoogleMap(),
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

      project_id: Joi.string(),

      gcm_sender_id: Joi.string(),

      application_id: Joi.string(),

      api_key: Joi.string(),
    });
  }

  static Ios() {
    return Joi.object({
      application_id: Joi.string(),

      api_key: Joi.string(),
    });
  }

  static Android() {
    return Joi.object({
      application_id: Joi.string(),

      api_key: Joi.string(),
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
      app_id: Joi.string(),
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
      write_key: Joi.string(),
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
      api_key: Joi.string(),
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
      app_id: Joi.string(),

      app_key: Joi.string(),

      web_token: Joi.string(),
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
      api_key: Joi.string(),
    });
  }

  static FyndRewards() {
    return Joi.object({
      credentials: this.FyndRewardsCredentials(),
    });
  }

  static FyndRewardsCredentials() {
    return Joi.object({
      public_key: Joi.string(),
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
      api_key: Joi.string(),
    });
  }

  static Rule() {
    return Joi.object({
      discount_qty: Joi.number(),

      min: Joi.number(),

      key: Joi.number(),

      max: Joi.number(),

      value: Joi.number(),
    });
  }

  static Identifier() {
    return Joi.object({
      article_id: Joi.array().items(Joi.string()),

      brand_id: Joi.array().items(Joi.number()),

      collection_id: Joi.array().items(Joi.string()),

      store_id: Joi.array().items(Joi.number()),

      item_id: Joi.array().items(Joi.number()),

      company_id: Joi.array().items(Joi.number()),

      category_id: Joi.array().items(Joi.number()),

      user_id: Joi.array().items(Joi.string()),
    });
  }

  static RuleDefinition() {
    return Joi.object({
      type: Joi.string().required(),

      value_type: Joi.string().required(),

      is_exact: Joi.boolean(),

      currency_code: Joi.string(),

      auto_apply: Joi.boolean(),

      applicable_on: Joi.string().required(),

      scope: Joi.array().items(Joi.string()),

      calculate_on: Joi.string().required(),
    });
  }

  static Validity() {
    return Joi.object({
      priority: Joi.number(),
    });
  }

  static Ownership() {
    return Joi.object({
      payable_by: Joi.string().required(),

      payable_category: Joi.string().required(),
    });
  }

  static CouponAuthor() {
    return Joi.object({
      modified_by: Joi.string(),

      created_by: Joi.string(),
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
      description: Joi.string(),

      auto: this.DisplayMetaDict(),

      apply: this.DisplayMetaDict(),

      title: Joi.string(),

      remove: this.DisplayMetaDict(),

      subtitle: Joi.string(),
    });
  }

  static Validation() {
    return Joi.object({
      user_registered_after: Joi.string(),

      app_id: Joi.array().items(Joi.string()),

      anonymous: Joi.boolean(),
    });
  }

  static CouponAction() {
    return Joi.object({
      txn_mode: Joi.string(),

      action_date: Joi.string(),
    });
  }

  static State() {
    return Joi.object({
      is_public: Joi.boolean(),

      is_display: Joi.boolean(),

      is_archived: Joi.boolean(),
    });
  }

  static PostOrder() {
    return Joi.object({
      cancellation_allowed: Joi.boolean(),

      return_allowed: Joi.boolean(),
    });
  }

  static PaymentAllowValue() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  static PaymentModes() {
    return Joi.object({
      types: Joi.array().items(Joi.string()),

      uses: this.PaymentAllowValue(),

      codes: Joi.array().items(Joi.string()),

      networks: Joi.array().items(Joi.string()),
    });
  }

  static PaymentCodes() {
    return Joi.object({
      ps: this.PaymentModes(),

      upi: this.PaymentModes(),

      card: this.PaymentModes(),

      pl: this.PaymentModes(),

      nb: this.PaymentModes(),

      wl: this.PaymentModes(),

      qr: this.PaymentModes(),
    });
  }

  static BulkBundleRestriction() {
    return Joi.object({
      multi_store_allowed: Joi.boolean().required(),
    });
  }

  static UsesRemaining() {
    return Joi.object({
      app: Joi.number(),

      user: Joi.number(),

      total: Joi.number(),
    });
  }

  static UsesRestriction() {
    return Joi.object({
      maximum: this.UsesRemaining(),

      remaining: this.UsesRemaining(),
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
      ordering_stores: Joi.array().items(Joi.number()),

      post_order: this.PostOrder(),

      coupon_allowed: Joi.boolean(),

      payments: this.PaymentCodes(),

      bulk_bundle: this.BulkBundleRestriction(),

      uses: this.UsesRestriction(),

      price_range: this.PriceRange(),

      platforms: Joi.array().items(Joi.string()),
    });
  }

  static CouponDateMeta() {
    return Joi.object({
      modified_on: Joi.string(),

      created_on: Joi.string(),
    });
  }

  static CouponSchedule() {
    return Joi.object({
      start: Joi.string(),

      next_schedule: Joi.array().items(Joi.object()),

      end: Joi.string(),

      duration: Joi.number(),

      cron: Joi.string(),
    });
  }

  static CouponAdd() {
    return Joi.object({
      rule: Joi.array().items(this.Rule()).required(),

      identifiers: this.Identifier().required(),

      rule_definition: this.RuleDefinition().required(),

      validity: this.Validity().required(),

      ownership: this.Ownership().required(),

      author: this.CouponAuthor(),

      display_meta: this.DisplayMeta().required(),

      validation: this.Validation(),

      tags: Joi.array().items(Joi.string()),

      code: Joi.string().required(),

      action: this.CouponAction(),

      type_slug: Joi.string().required(),

      state: this.State(),

      restrictions: this.Restrictions(),

      date_meta: this.CouponDateMeta(),

      _schedule: this.CouponSchedule(),
    });
  }

  static CouponsResponse() {
    return Joi.object({
      page: this.Page(),

      items: this.CouponAdd(),
    });
  }

  static SuccessMessage() {
    return Joi.object({
      message: Joi.string(),

      success: Joi.boolean(),
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
      rule: Joi.array().items(this.Rule()).required(),

      identifiers: this.Identifier().required(),

      rule_definition: this.RuleDefinition().required(),

      validity: this.Validity().required(),

      ownership: this.Ownership().required(),

      author: this.CouponAuthor(),

      display_meta: this.DisplayMeta().required(),

      validation: this.Validation(),

      tags: Joi.array().items(Joi.string()),

      code: Joi.string().required(),

      action: this.CouponAction(),

      type_slug: Joi.string().required(),

      state: this.State(),

      restrictions: this.Restrictions(),

      date_meta: this.CouponDateMeta(),

      _schedule: this.CouponSchedule(),
    });
  }

  static CouponPartialUpdate() {
    return Joi.object({
      archive: Joi.boolean(),

      schedule: this.CouponSchedule(),
    });
  }

  static StoreMapping() {
    return Joi.object({
      enabled: Joi.string(),

      marketplace_store_id: Joi.string(),

      store_id: Joi.number(),

      meta: Joi.object(),
    });
  }

  static AllChannels() {
    return Joi.object({
      mkp_name: Joi.boolean(),
    });
  }

  static MyntraPayload() {
    return Joi.object({
      merchant_id: Joi.string(),

      secret_key: Joi.string(),
    });
  }

  static AmazonPayload() {
    return Joi.object({
      seller_id: Joi.string(),

      mws_auth_token: Joi.string(),
    });
  }

  static FlipkartPayload() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static TatacliqPayload() {
    return Joi.object({
      user_name: Joi.string(),

      password: Joi.string(),

      merchant_id: Joi.string(),
    });
  }

  static AjioPayload() {
    return Joi.object({
      username: Joi.string(),

      password: Joi.string(),

      client_ip: Joi.string(),
    });
  }

  static InventorySyncConfig() {
    return Joi.object({
      inventory: Joi.boolean(),

      price: Joi.boolean(),
    });
  }

  static StoreMappingPayload() {
    return Joi.object({
      store_mapping_enabled: Joi.boolean(),

      store_mapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static StatusPayload() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  static StatusResp() {
    return Joi.object({
      is_active: Joi.boolean(),
    });
  }

  static SyncPayload() {
    return Joi.object({
      modified_since: Joi.string(),
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

      worker_assigned: Joi.string(),

      is_active: Joi.boolean(),

      store_mapping_enabled: Joi.boolean(),

      company_id: Joi.number(),

      configuration: Joi.object(),

      store_mapping: Joi.array().items(this.StoreMapping()),
    });
  }

  static AppUser() {
    return Joi.object({
      _id: Joi.string(),

      active: Joi.boolean(),

      application_id: Joi.string(),

      block_reason: Joi.string(),

      updated_at: Joi.string(),

      updated_by: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static E() {
    return Joi.object({
      code: Joi.object(),

      exception: Joi.string(),

      info: Joi.string(),

      message: Joi.string(),

      request_id: Joi.string(),

      stack_trace: Joi.string(),

      status: Joi.number(),
    });
  }

  static Giveaway() {
    return Joi.object({
      _id: Joi.string(),

      _schedule: this.Schedule(),

      active: Joi.boolean(),

      application_id: Joi.string(),

      audience: this.RewardsAudience(),

      banner_image: this.Asset(),

      created_at: Joi.string(),

      description: Joi.string(),

      rule: this.RewardsRule(),

      title: Joi.string(),

      updated_at: Joi.string(),
    });
  }

  static GiveawayResponse() {
    return Joi.object({
      items: Joi.array().items(this.Giveaway()),

      page: this.Page(),
    });
  }

  static HistoryPretty() {
    return Joi.object({
      _id: Joi.string(),

      application_id: Joi.string(),

      claimed: Joi.boolean(),

      created_at: Joi.string(),

      expires_on: Joi.string(),

      points: Joi.number(),

      remaining_points: Joi.number(),

      text_1: Joi.string(),

      text_2: Joi.string(),

      text_3: Joi.string(),

      txn_name: Joi.string(),

      updated_at: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static HistoryRes() {
    return Joi.object({
      items: Joi.array().items(this.HistoryPretty()),

      page: this.Page(),

      points: Joi.number(),
    });
  }

  static Offer() {
    return Joi.object({
      _schedule: this.Schedule(),

      active: Joi.boolean(),

      application_id: Joi.string(),

      banner_image: this.Asset(),

      created_at: Joi.string(),

      name: Joi.string(),

      rule: Joi.object(),

      share: this.ShareMessages(),

      sub_text: Joi.string(),

      text: Joi.string(),

      type: Joi.string(),

      updated_at: Joi.string(),

      updated_by: Joi.string(),

      url: Joi.string(),
    });
  }

  static Points() {
    return Joi.object({
      available: Joi.number(),
    });
  }

  static Referral() {
    return Joi.object({
      code: Joi.string(),
    });
  }

  static RewardUser() {
    return Joi.object({
      _id: Joi.string(),

      active: Joi.boolean(),

      created_at: Joi.string(),

      referral: this.Referral(),

      uid: Joi.number(),

      updated_at: Joi.string(),

      user_block_reason: Joi.string(),

      user_id: Joi.string(),
    });
  }

  static RewardsAudience() {
    return Joi.object({
      header_user_id: Joi.string(),

      id: Joi.string(),
    });
  }

  static RewardsRule() {
    return Joi.object({
      amount: Joi.number(),
    });
  }

  static ShareMessages() {
    return Joi.object({
      email: Joi.string(),

      facebook: Joi.string(),

      fallback: Joi.string(),

      message: Joi.string(),

      messenger: Joi.string(),

      sms: Joi.string(),

      text: Joi.string(),

      twitter: Joi.string(),

      whatsapp: Joi.string(),
    });
  }

  static UserRes() {
    return Joi.object({
      points: this.Points(),

      user: this.RewardUser(),
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
      properties_cart_id: Joi.string(),

      context_traits_first_name: Joi.string(),

      context_traits_last_name: Joi.string(),

      context_traits_phone_number: Joi.string(),

      context_traits_email: Joi.string(),

      context_app_application_id: Joi.string(),

      properties_breakup_values_raw_total: Joi.string(),

      received_at: this.ReceivedAt(),
    });
  }

  static AbandonCartsList() {
    return Joi.object({
      items: Joi.array().items(this.AbandonCartsDetail()),

      cart_total: Joi.string(),

      page: this.Page(),
    });
  }

  static AbandonCartDetail() {
    return Joi.object({
      _id: Joi.string(),

      user_id: Joi.string(),

      cart_value: Joi.string(),

      articles: Joi.array().items(Joi.object()),

      breakup: Joi.object(),

      address: Joi.object(),
    });
  }

  static ExportJobReq() {
    return Joi.object({
      marketplace_name: Joi.string(),

      start_time: Joi.string(),

      end_time: Joi.string(),

      event_type: Joi.string(),

      trace_id: Joi.string(),
    });
  }

  static ExportJobRes() {
    return Joi.object({
      status: Joi.string(),

      job_id: Joi.string(),
    });
  }

  static ExportJobStatusRes() {
    return Joi.object({
      status: Joi.string(),

      job_id: Joi.string(),

      download_url: Joi.string(),
    });
  }

  static GetLogsListReq() {
    return Joi.object({
      marketplace_name: Joi.string(),

      start_date: Joi.string(),

      company_id: Joi.string(),

      end_date: Joi.string(),
    });
  }

  static MkpLogsResp() {
    return Joi.object({
      start_time_iso: Joi.string(),

      end_time_iso: Joi.string(),

      event_type: Joi.string(),

      trace_id: Joi.string(),

      count: Joi.string(),

      status: Joi.string(),
    });
  }

  static GetLogsListRes() {
    return Joi.object({
      items: Joi.array().items(this.MkpLogsResp()),

      page: this.Page(),
    });
  }

  static SearchLogReq() {
    return Joi.object({
      marketplace_name: Joi.string(),

      start_date: Joi.string(),

      company_id: Joi.string(),

      end_date: Joi.string(),

      identifier: Joi.string(),

      identifier_value: Joi.string(),
    });
  }

  static LogInfo() {
    return Joi.object({
      _id: Joi.string(),

      status: Joi.string(),

      event_type: Joi.string(),

      marketplace_name: Joi.string(),

      event: Joi.string(),

      trace_id: Joi.string(),

      company_id: Joi.number(),

      brand_id: Joi.number(),

      store_code: Joi.string(),

      store_id: Joi.number(),

      item_id: Joi.number(),

      article_id: Joi.string(),

      seller_identifier: Joi.string(),
    });
  }

  static SearchLogRes() {
    return Joi.object({
      items: Joi.array().items(this.LogInfo()),

      page: this.Page(),
    });
  }

  static ValidityObject() {
    return Joi.object({
      start: Joi.string().required(),

      end: Joi.string().required(),
    });
  }

  static CreateUpdateDiscount() {
    return Joi.object({
      name: Joi.string().required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      app_ids: Joi.array().items(Joi.string()).required(),

      job_type: Joi.string().required(),

      discount_type: Joi.string().required(),

      discount_level: Joi.string().required(),

      value: Joi.number(),

      file_path: Joi.string(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      validity: this.ValidityObject().required(),
    });
  }

  static DiscountJob() {
    return Joi.object({
      _id: Joi.string().required(),

      name: Joi.string().required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      app_ids: Joi.array().items(Joi.string()),

      job_type: Joi.string(),

      discount_type: Joi.string(),

      discount_level: Joi.string(),

      value: Joi.number(),

      file_path: Joi.string(),

      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),

      validity: this.ValidityObject().required(),

      created_on: Joi.string().required(),

      modified_on: Joi.string().required(),

      created_by: this.UserDetails().required(),

      modified_by: this.UserDetails().required(),

      meta: Joi.object(),
    });
  }

  static ListOrCalender() {
    return Joi.object({
      items: Joi.array().items(this.DiscountJob()).required(),

      page: this.Page().required(),
    });
  }

  static FileJobResponse() {
    return Joi.object({
      stage: Joi.string().required(),

      total: Joi.number().required(),

      failed: Joi.number().required(),

      company_id: Joi.number().required(),

      body: Joi.object(),

      type: Joi.string().required(),

      file_type: Joi.string().required(),
    });
  }

  static DownloadFileJob() {
    return Joi.object({
      brand_ids: Joi.array().items(Joi.number()),

      store_ids: Joi.array().items(Joi.number()),
    });
  }

  static CancelJobResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static UserDetails() {
    return Joi.object({
      username: Joi.string().required(),

      user_id: Joi.string().required(),
    });
  }

  static BadRequestObject() {
    return Joi.object({
      message: Joi.string().required(),
    });
  }

  static AddProxyReq() {
    return Joi.object({
      attached_path: Joi.string(),

      proxy_url: Joi.string(),
    });
  }

  static AddProxyResponse() {
    return Joi.object({
      _id: Joi.string(),

      attached_path: Joi.string(),

      proxy_url: Joi.string(),

      company_id: Joi.string(),

      application_id: Joi.string(),

      extension_id: Joi.string(),

      created_at: Joi.string(),

      modified_at: Joi.string(),
    });
  }

  static ApiError() {
    return Joi.object({
      code: Joi.string(),

      message: Joi.string(),

      meta: Joi.object(),
    });
  }

  static RemoveProxyResponse() {
    return Joi.object({
      message: Joi.string(),

      data: Joi.object(),
    });
  }
}

class LeadValidator {
  static getTickets() {
    return Joi.object({
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
      body: Validator.AddTicketPayload().required(),
    }).required();
  }

  static getTicket() {
    return Joi.object({
      ticketId: Joi.string().required(),
    }).required();
  }

  static editTicket() {
    return Joi.object({
      ticketId: Joi.string().required(),
      body: Validator.EditTicketPayload().required(),
    }).required();
  }

  static createHistory() {
    return Joi.object({
      ticketId: Joi.string().required(),
      body: Validator.TicketHistoryPayload().required(),
    }).required();
  }

  static getTicketHistory() {
    return Joi.object({
      ticketId: Joi.string().required(),
    }).required();
  }
}

class BillingValidator {
  static getInvoices() {
    return Joi.object({}).required();
  }

  static getInvoiceById() {
    return Joi.object({
      invoiceId: Joi.string().required(),
    }).required();
  }

  static getCustomerDetail() {
    return Joi.object({}).required();
  }

  static upsertCustomerDetail() {
    return Joi.object({
      body: Validator.SubscriptionCustomerCreate().required(),
    }).required();
  }

  static getSubscription() {
    return Joi.object({}).required();
  }

  static getFeatureLimitConfig() {
    return Joi.object({}).required();
  }

  static activateSubscriptionPlan() {
    return Joi.object({
      body: Validator.SubscriptionActivateReq().required(),
    }).required();
  }

  static cancelSubscriptionPlan() {
    return Joi.object({
      body: Validator.CancelSubscriptionReq().required(),
    }).required();
  }
}

class CommunicationValidator {
  static getSystemNotifications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

class PaymentValidator {
  static getAllPayouts() {
    return Joi.object({
      uniqueExternalId: Joi.string(),
    }).required();
  }

  static savePayout() {
    return Joi.object({
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static updatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().required(),
      body: Validator.PayoutRequest().required(),
    }).required();
  }

  static activateAndDectivatePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().required(),
      body: Validator.UpdatePayoutRequest().required(),
    }).required();
  }

  static deletePayout() {
    return Joi.object({
      uniqueTransferNo: Joi.string().required(),
    }).required();
  }

  static getSubscriptionPaymentMethod() {
    return Joi.object({}).required();
  }

  static deleteSubscriptionPaymentMethod() {
    return Joi.object({
      uniqueExternalId: Joi.string().required(),
      paymentMethodId: Joi.string().required(),
    }).required();
  }

  static getSubscriptionConfig() {
    return Joi.object({}).required();
  }

  static saveSubscriptionSetupIntent() {
    return Joi.object({
      body: Validator.SaveSubscriptionSetupIntentRequest().required(),
    }).required();
  }
}

class OrderValidator {
  static shipmentStatusUpdate() {
    return Joi.object({
      body: Validator.UpdateShipmentStatusBody().required(),
    }).required();
  }

  static activityStatus() {
    return Joi.object({
      bagId: Joi.string().required(),
    }).required();
  }

  static storeProcessShipmentUpdate() {
    return Joi.object({
      body: Validator.UpdateProcessShipmenstRequestBody().required(),
    }).required();
  }

  static getOrdersByCompanyId() {
    return Joi.object({
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
    return Joi.object({}).required();
  }

  static voiceCallback() {
    return Joi.object({}).required();
  }

  static voiceClickToCall() {
    return Joi.object({
      caller: Joi.string().required(),
      receiver: Joi.string().required(),
    }).required();
  }
}

class CatalogValidator {
  static createProductBundle() {
    return Joi.object({
      body: Validator.ProductBundleRequest().required(),
    }).required();
  }

  static getProductBundle() {
    return Joi.object({
      q: Joi.string(),
    }).required();
  }

  static updateProductBundle() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.ProductBundleUpdateRequest().required(),
    }).required();
  }

  static getProductBundleDetail() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static createSizeGuide() {
    return Joi.object({
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSizeGuides() {
    return Joi.object({
      active: Joi.boolean(),
      q: Joi.string(),
      tag: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateSizeGuide() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.ValidateSizeGuide().required(),
    }).required();
  }

  static getSizeGuide() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getSellerInsights() {
    return Joi.object({
      sellerAppId: Joi.string().required(),
    }).required();
  }

  static createMarketplaceOptin() {
    return Joi.object({
      marketplace: Joi.string().required(),
      body: Validator.OptInPostRequest().required(),
    }).required();
  }

  static getMarketplaceOptinDetail() {
    return Joi.object({}).required();
  }

  static getCompanyDetail() {
    return Joi.object({}).required();
  }

  static getCompanyBrandDetail() {
    return Joi.object({
      isActive: Joi.boolean(),
      q: Joi.boolean(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      marketplace: Joi.string(),
    }).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static getStoreDetail() {
    return Joi.object({
      q: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getGenderAttribute() {
    return Joi.object({
      department: Joi.string().required(),
    }).required();
  }

  static listProductTemplateCategories() {
    return Joi.object({
      departments: Joi.string().required(),
      itemType: Joi.string().required(),
    }).required();
  }

  static listDepartmentsData() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      name: Joi.string(),
      search: Joi.string(),
      isActive: Joi.boolean(),
    }).required();
  }

  static getDepartmentData() {
    return Joi.object({
      uid: Joi.string().required(),
    }).required();
  }

  static listProductTemplate() {
    return Joi.object({
      departments: Joi.string().required(),
    }).required();
  }

  static validateProductTemplate() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static downloadProductTemplateViews() {
    return Joi.object({
      slug: Joi.string().required(),
    }).required();
  }

  static downloadProductTemplateView() {
    return Joi.object({
      itemType: Joi.string().required(),
    }).required();
  }

  static validateProductTemplateSchema() {
    return Joi.object({
      itemType: Joi.string().required(),
    }).required();
  }

  static listHSNCodes() {
    return Joi.object({}).required();
  }

  static listProductTemplateExportDetails() {
    return Joi.object({}).required();
  }

  static listTemplateBrandTypeValues() {
    return Joi.object({
      filter: Joi.string().required(),
    }).required();
  }

  static createCategories() {
    return Joi.object({
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static listCategories() {
    return Joi.object({
      level: Joi.string(),
      departments: Joi.string(),
      q: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateCategory() {
    return Joi.object({
      uid: Joi.string().required(),
      body: Validator.CategoryRequestBody().required(),
    }).required();
  }

  static getCategoryData() {
    return Joi.object({
      uid: Joi.string().required(),
    }).required();
  }

  static createProduct() {
    return Joi.object({
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static getProducts() {
    return Joi.object({
      brandIds: Joi.number(),
      categoryIds: Joi.number(),
      search: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
    }).required();
  }

  static editProduct() {
    return Joi.object({
      itemId: Joi.number().required(),
      body: Validator.ProductCreateUpdate().required(),
    }).required();
  }

  static getProduct() {
    return Joi.object({
      itemCode: Joi.string(),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static getProductValidation() {
    return Joi.object({}).required();
  }

  static getProductSize() {
    return Joi.object({
      itemCode: Joi.string(),
      itemId: Joi.number().required(),
      brandUid: Joi.number(),
      uid: Joi.number(),
    }).required();
  }

  static updateProductAssetsInBulk() {
    return Joi.object({
      body: Validator.BulkJob().required(),
    }).required();
  }

  static getProductBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteProductBulkJob() {
    return Joi.object({
      batchId: Joi.number().required(),
    }).required();
  }

  static createProductsInBulk() {
    return Joi.object({
      batchId: Joi.string().required(),
      body: Validator.BulkProductRequest().required(),
    }).required();
  }

  static getCompanyTags() {
    return Joi.object({}).required();
  }

  static createProductAssetsInBulk() {
    return Joi.object({
      body: Validator.ProductBulkAssets().required(),
    }).required();
  }

  static getProductAssetsInBulk() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteSize() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.number().required(),
    }).required();
  }

  static addInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      size: Joi.string().required(),
      body: Validator.InventoryRequest().required(),
    }).required();
  }

  static getInventory() {
    return Joi.object({
      itemId: Joi.string().required(),
      size: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteInventory() {
    return Joi.object({
      itemId: Joi.number().required(),
      locationId: Joi.number().required(),
    }).required();
  }

  static createBulkInventoryJob() {
    return Joi.object({
      body: Validator.BulkJob().required(),
    }).required();
  }

  static getInventoryBulkUploadHistory() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static deleteBulkInventoryJob() {
    return Joi.object({}).required();
  }

  static createBulkInventory() {
    return Joi.object({
      body: Validator.InventoryBulkRequest().required(),
    }).required();
  }

  static createInventoryExportJob() {
    return Joi.object({
      body: Validator.InventoryExportRequest().required(),
    }).required();
  }

  static getInventoryExport() {
    return Joi.object({}).required();
  }

  static exportInventoryConfig() {
    return Joi.object({
      filterType: Joi.string(),
    }).required();
  }

  static createHsnCode() {
    return Joi.object({
      body: Validator.HsnUpsert().required(),
    }).required();
  }

  static getAllHsnCodes() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string(),
    }).required();
  }

  static updateHsnCode() {
    return Joi.object({
      uid: Joi.number().required(),
      body: Validator.HsnUpsert().required(),
    }).required();
  }

  static getHsnCode() {
    return Joi.object({
      uid: Joi.number().required(),
    }).required();
  }

  static bulkHsnCode() {
    return Joi.object({
      body: Validator.BulkHsnUpsert().required(),
    }).required();
  }
}

class CompanyProfileValidator {
  static updateCompany() {
    return Joi.object({
      body: Validator.CompanyStoreSerializerRequest().required(),
    }).required();
  }

  static cbsOnboardGet() {
    return Joi.object({}).required();
  }

  static getCompanyMetrics() {
    return Joi.object({}).required();
  }

  static editBrand() {
    return Joi.object({
      brandId: Joi.string().required(),
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static getBrand() {
    return Joi.object({
      brandId: Joi.string().required(),
    }).required();
  }

  static createBrand() {
    return Joi.object({
      body: Validator.CreateUpdateBrandRequestSerializer().required(),
    }).required();
  }

  static createCompanyBrandMapping() {
    return Joi.object({
      body: Validator.CompanyBrandPostRequestSerializer().required(),
    }).required();
  }

  static getBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static createLocation() {
    return Joi.object({
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocations() {
    return Joi.object({
      storeType: Joi.string(),
      q: Joi.string(),
      stage: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateLocation() {
    return Joi.object({
      locationId: Joi.string().required(),
      body: Validator.LocationSerializer().required(),
    }).required();
  }

  static getLocationDetail() {
    return Joi.object({
      locationId: Joi.string().required(),
    }).required();
  }
}

class FileStorageValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().required(),
      body: Validator.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().required(),
      body: Validator.StartResponse().required(),
    }).required();
  }

  static getSignUrls() {
    return Joi.object({
      body: Validator.SignUrlRequest().required(),
    }).required();
  }

  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      body: Validator.BulkRequest().required(),
    }).required();
  }

  static browse() {
    return Joi.object({
      namespace: Joi.string().required(),
      pageNo: Joi.number(),
    }).required();
  }

  static proxy() {
    return Joi.object({
      url: Joi.string().required(),
    }).required();
  }
}

class InventoryValidator {
  static getJobsByCompany() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static updateJob() {
    return Joi.object({
      xUserData: Joi.string(),
      body: Validator.JobConfigDTO().required(),
    }).required();
  }

  static createJob() {
    return Joi.object({
      xUserData: Joi.string(),
      body: Validator.JobConfigDTO().required(),
    }).required();
  }

  static getJobByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getJobConfigDefaults() {
    return Joi.object({}).required();
  }

  static getJobByCode() {
    return Joi.object({
      code: Joi.string().required(),
    }).required();
  }

  static getJobCodesByCompanyAndIntegration() {
    return Joi.object({
      integrationId: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}

class ConfigurationValidator {
  static createApplication() {
    return Joi.object({
      body: Validator.CreateApplicationRequest().required(),
    }).required();
  }

  static getApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      q: Joi.string(),
    }).required();
  }

  static getCurrencies() {
    return Joi.object({}).required();
  }

  static getDomainAvailibility() {
    return Joi.object({
      body: Validator.DomainSuggestionsRequest().required(),
    }).required();
  }

  static getIntegrationById() {
    return Joi.object({
      id: Joi.number().required(),
    }).required();
  }

  static getAvailableOptIns() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getSelectedOptIns() {
    return Joi.object({
      level: Joi.string().required(),
      uid: Joi.number().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getIntegrationLevelConfig() {
    return Joi.object({
      id: Joi.string().required(),
      level: Joi.string().required(),
      opted: Joi.boolean(),
      checkPermission: Joi.boolean(),
    }).required();
  }

  static getIntegrationByLevelId() {
    return Joi.object({
      id: Joi.string().required(),
      level: Joi.string().required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getLevelActiveIntegrations() {
    return Joi.object({
      id: Joi.string().required(),
      level: Joi.string().required(),
      uid: Joi.number().required(),
    }).required();
  }

  static getBrandsByCompany() {
    return Joi.object({
      q: Joi.string(),
    }).required();
  }

  static getCompanyByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.CompanyByBrandsRequest().required(),
    }).required();
  }

  static getStoreByBrands() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.StoreByBrandsRequest().required(),
    }).required();
  }

  static getOtherSellerApplications() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getOtherSellerApplicationById() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static optOutFromApplication() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.OptOutInventory().required(),
    }).required();
  }
}

class MarketplacesValidator {
  static getAvailableChannels() {
    return Joi.object({}).required();
  }

  static getChannels() {
    return Joi.object({}).required();
  }

  static getChannel() {
    return Joi.object({
      channel: Joi.string().required(),
    }).required();
  }

  static registerMyntraChannel() {
    return Joi.object({
      body: Validator.MyntraPayload().required(),
    }).required();
  }

  static updateMyntraChannelCredentials() {
    return Joi.object({
      body: Validator.MyntraPayload().required(),
    }).required();
  }

  static registerAmazonChannel() {
    return Joi.object({
      body: Validator.AmazonPayload().required(),
    }).required();
  }

  static updateAmazonChannelCredentials() {
    return Joi.object({
      body: Validator.AmazonPayload().required(),
    }).required();
  }

  static registerFlipkartChannel() {
    return Joi.object({
      flipkartChannel: Joi.string().required(),
      body: Validator.FlipkartPayload().required(),
    }).required();
  }

  static updateFlipkartChannelCredentials() {
    return Joi.object({
      flipkartChannel: Joi.string().required(),
      body: Validator.FlipkartPayload().required(),
    }).required();
  }

  static registerTatacliqChannel() {
    return Joi.object({
      tatacliqChannel: Joi.string().required(),
      body: Validator.TatacliqPayload().required(),
    }).required();
  }

  static updateTatacliqChannelCredentials() {
    return Joi.object({
      tatacliqChannel: Joi.string().required(),
      body: Validator.TatacliqPayload().required(),
    }).required();
  }

  static registerAjioChannel() {
    return Joi.object({
      body: Validator.AjioPayload().required(),
    }).required();
  }

  static updateAjioChannelCredentials() {
    return Joi.object({
      body: Validator.AjioPayload().required(),
    }).required();
  }

  static updateChannelInventorySyncConfig() {
    return Joi.object({
      channel: Joi.string().required(),
      validateCred: Joi.string(),
      body: Validator.InventorySyncConfig().required(),
    }).required();
  }

  static getChannelLocationConfig() {
    return Joi.object({
      channel: Joi.string().required(),
    }).required();
  }

  static updateChannelLocationConfig() {
    return Joi.object({
      channel: Joi.string().required(),
      body: Validator.StoreMappingPayload().required(),
    }).required();
  }

  static getChannelStatus() {
    return Joi.object({
      channel: Joi.string().required(),
    }).required();
  }

  static updateChannelStatus() {
    return Joi.object({
      channel: Joi.string().required(),
      body: Validator.StatusPayload().required(),
    }).required();
  }

  static triggerChannelInventoryUpdates() {
    return Joi.object({
      channel: Joi.string().required(),
      updateType: Joi.string().required(),
      body: Validator.SyncPayload().required(),
    }).required();
  }
}

class AnalyticsValidator {
  static createExportJob() {
    return Joi.object({
      exportType: Joi.string().required(),
      body: Validator.ExportJobReq().required(),
    }).required();
  }

  static getExportJobStatus() {
    return Joi.object({
      exportType: Joi.string().required(),
      jobId: Joi.string().required(),
    }).required();
  }

  static getLogsList() {
    return Joi.object({
      logType: Joi.string().required(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      body: Validator.GetLogsListReq().required(),
    }).required();
  }

  static searchLogs() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      logType: Joi.string().required(),
      body: Validator.SearchLogReq().required(),
    }).required();
  }
}

class DiscountValidator {
  static getDiscounts() {
    return Joi.object({
      view: Joi.string(),
      q: Joi.string(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      archived: Joi.boolean(),
      month: Joi.number(),
      year: Joi.number(),
      type: Joi.string(),
      appIds: Joi.array().items(Joi.string()),
    }).required();
  }

  static createDiscount() {
    return Joi.object({
      body: Validator.CreateUpdateDiscount().required(),
    }).required();
  }

  static getDiscount() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static updateDiscount() {
    return Joi.object({
      id: Joi.string().required(),
      body: Validator.CreateUpdateDiscount().required(),
    }).required();
  }

  static validateDiscountFile() {
    return Joi.object({
      discount: Joi.string(),
      body: Validator.DiscountJob().required(),
    }).required();
  }

  static downloadDiscountFile() {
    return Joi.object({
      type: Joi.string().required(),
      body: Validator.DownloadFileJob().required(),
    }).required();
  }

  static getValidationJob() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static cancelValidationJob() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static getDownloadJob() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }

  static cancelDownloadJob() {
    return Joi.object({
      id: Joi.string().required(),
    }).required();
  }
}

module.exports = {
  LeadValidator,
  BillingValidator,
  CommunicationValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  CompanyProfileValidator,
  FileStorageValidator,
  InventoryValidator,
  ConfigurationValidator,
  MarketplacesValidator,
  AnalyticsValidator,
  DiscountValidator,
};
