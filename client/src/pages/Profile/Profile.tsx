import PageHeader from "../../components/common/PageHeader";
import ProfileInfoCard from "../../components/common/ProfileInfoCard";

function Profile() {
  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        title="Profile"
        description="Manage your personal information and app preferences."
      />

      <div className="mt-10 rounded-2xl bg-slate-800 p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white">User Details</h2>
        <p className="mt-3 text-slate-400">
          This section will later show your profile information.
        </p>

        <button className="mt-6 rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-500">
          Edit Profile
        </button>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProfileInfoCard
            label="Name"
            value="Swapnil Gupta"
            note="This is your display name."
          />

          <ProfileInfoCard
            label="Email"
            value="swapnil@example.com"
            note="Used for login and notifications."
          />

          <ProfileInfoCard
            label="Theme"
            value="Dark Mode"
            note="Current app appearance setting."
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;