import { createI18n } from "vue-i18n";

const messages = {
  en: {
    dashboard: "Dashboard",
    administrators: "Administrators",
    list: "List",
    create: "Create",
    update: "Update",
    users: "Users",
    phoneNumbers: "Phone Numbers",
    importExcel: "Emport Excel",
    tags: "Tags",
    pickMarkPhones: "Pick & Mark Phones",
    report: "Report",
    overview: "Overview",
    settings: "Settings",
    changePassword: "Change Password",
    account: "Account",
    home: "Home",
    profilDetails: "Profile Details",
    fullName: "Full Name",
    role: "Role",
    saveChanges: "Save Changes",
    pleaseWait: "Please Wait...",
    password: "Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    cancel: "Cancel",
    resetPassword: "Reset Password",
    passwordSpecification: "Password must be at least 4 character and contain symbols.",
    yesterdayLoginCounts: "Yesterday Login Counts",
    yesterdayPickedNumbers: "Yesterday Picked Numbers",
    weeklyReport: "Weekly Report",
    pickedAmount: "Amount of Picked phones",
    per1Week: "per 1 week",
    adminitratorsStatistics: "Adminitrators Statistics",
    search: "Search",
    status: "Status",
    pickableAmount: "Pickable Amount",
    actions: "Actions",
    addAdministrator: "Add Administrator",
    adminFullname: "Admin full name...",
    adminAccount: "Admin account...",
    adminPassword: "Admin password...",
    adminPickableAmount: "Admin pickable amount...",
    updateAdministrator: "Update Administrator",
    historyStatistics: "Call History Statistics",
    phoneNumber: "Phone Number",
    clientName: "Client Name",
    dateTime: "Date & Time",
    history: "History",
    usersStatistics: "Users Statistics",
    addUser: "Add User",
    userFullname: "User full name...",
    userAccount: "User account...",
    userPassword: "User password...",
    userPickableAmount: "User pickable amount...",
    updateUser: "Update User",
    selectExcel: "Select Excel file and click Import button",
    excelFile: "Excel File",
    import: "Import",
    phoneNumbersStatistics: "Phone Numbers Statistics",
    updatePhone: "Update Phone",
    plPhoneNumber: "Phone number...",
    plClientName: "Client name...",
    tagsStatistics: "Tags Statistics",
    tagName: "Tag Name",
    addTag: "Add Tag",
    plTagName: "Tag name...",
    updateTag: "Update Tag",
    pickNumbers: "Pick Numbers",
    availablePhones: "Available Phones",
    picking: "Pick",
    phonesReport: "Phones Report",
    startDateTime: "Start date & time",
    endDateTime: "End date & time",
    accountSettings: "Account Settings",
    language: "Language",
    English: "English",
    Chinese: "Chinese",
    signOut: "Sign Out",
  },
  ch: {
    dashboard: "仪表盘",
    administrators: "管理员管理",
    list: "列表",
    create: "新增",
    update: "更新",
    users: "会员管理",
    phoneNumbers: "电话号码管理",
    importExcel: "导入 Excel",
    tags: "Tag管理",
    pickMarkPhones: "获取 & 标记",
    report: "报表/查看导出",
    overview: "概观",
    settings: "修改",
    changePassword: "密码更新",
    account: "帐户",
    home: "主页",
    profilDetails: "个人资料详情",
    fullName: "姓名",
    role: "等级",
    saveChanges: "保存修改",
    pleaseWait: "请稍等...",
    password: "密码",
    currentPassword: "当前密码",
    newPassword: "新密码",
    confirmNewPassword: "确认新密码",
    cancel: "取消",
    resetPassword: "重设密码",
    passwordSpecification: "密码必须至少为 4 个字符并包含符号。",
    yesterdayLoginCounts: "昨日用户登陆数量",
    yesterdayPickedNumbers: "昨日用户获取号码数量",
    weeklyReport: "周报",
    pickedAmount: "获取号码数量",
    per1Week: "一周",
    adminitratorsStatistics: "管理员统计数据",
    search: "探索",
    status: "状态",
    pickableAmount: "可获取的数量",
    actions: "操作",
    addAdministrator: "新增管理员",
    adminFullname: "管理员姓名...",
    adminAccount: "管理员帐户...",
    adminPassword: "管理员密码...",
    updateAdministrator: "更新管理员",
    adminPickableAmount: "管理员能获取的数量...",
    historyStatistics: "拨打历史统计",
    phoneNumber: "电话号码",
    clientName: "顾客名",
    dateTime: "日期 & 时间",
    history: "历史",
    usersStatistics: "会员统计数据",
    addUser: "新增会员",
    userFullname: "会员姓名...",
    userAccount: "会员帐户...",
    userPassword: "会员密码...",
    userPickableAmount: "会员能获取的数量...",
    updateUser: "更新会员",
    selectExcel: "选择 Excel 文件，然后点击导入按钮",
    excelFile: "Excel文件",
    import: "导入",
    phoneNumbersStatistics: "电话号码统计",
    updatePhone: "更新电话号码",
    plPhoneNumber: "电话号码...",
    plClientName: "顾客名...",
    tagsStatistics: "Tags统计",
    tagName: "Tag名",
    addTag: "新增Tag",
    plTagName: "Tag名...",
    updateTag: "更新Tag",
    pickNumbers: "获取号码",
    availablePhones: "可用的号码",
    picking: "获取",
    phonesReport: "电话报告",
    startDateTime: "最初期限",
    endDateTime: "最后期限",
    accountSettings: "帐户修改",
    language: "语言",
    English: "英文",
    Chinese: "中文",
    signOut: "登出",
  }
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages
});

export default i18n;
