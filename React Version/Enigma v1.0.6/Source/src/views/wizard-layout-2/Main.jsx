function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Wizard Layout</h2>
      </div>
      {/* BEGIN: Wizard Layout */}
      <div className="intro-y box py-10 sm:py-20 mt-5">
        <div className="px-5 sm:px-20">
          <div className="intro-x flex items-center">
            <button className="w-10 h-10 rounded-full btn btn-primary">
              1
            </button>
            <div className="font-medium text-base ml-3">Create New Account</div>
          </div>
          <div className="intro-x flex items-center mt-5">
            <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
              2
            </button>
            <div className="text-base text-slate-600 dark:text-slate-500 ml-3">
              Setup Your Profile
            </div>
          </div>
          <div className="intro-x flex items-center mt-5">
            <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
              3
            </button>
            <div className="text-base text-slate-600 dark:text-slate-500 ml-3">
              Setup Your Business Details
            </div>
          </div>
          <div className="intro-x flex items-center mt-5">
            <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
              4
            </button>
            <div className="text-base text-slate-600 dark:text-slate-500 ml-3">
              Setup Billing Account
            </div>
          </div>
          <div className="intro-x flex items-center mt-5">
            <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
              5
            </button>
            <div className="text-base text-slate-600 dark:text-slate-500 ml-3">
              Finalize your purchase
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
          <div className="font-medium text-base">Profile Settings</div>
          <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                From
              </label>
              <input
                id="input-wizard-1"
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-2" className="form-label">
                To
              </label>
              <input
                id="input-wizard-2"
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-3" className="form-label">
                Subject
              </label>
              <input
                id="input-wizard-3"
                type="text"
                className="form-control"
                placeholder="Important Meeting"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-4" className="form-label">
                Has the Words
              </label>
              <input
                id="input-wizard-4"
                type="text"
                className="form-control"
                placeholder="Job, Work, Documentation"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-5" className="form-label">
                Doesn't Have
              </label>
              <input
                id="input-wizard-5"
                type="text"
                className="form-control"
                placeholder="Job, Work, Documentation"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-6" className="form-label">
                Size
              </label>
              <select id="input-wizard-6" className="form-select">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
              <button className="btn btn-secondary w-24">Previous</button>
              <button className="btn btn-primary w-24 ml-2">Next</button>
            </div>
          </div>
        </div>
      </div>
      {/* END: Wizard Layout */}
    </>
  );
}

export default Main;
