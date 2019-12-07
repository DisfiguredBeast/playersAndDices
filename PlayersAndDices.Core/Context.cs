using LiteDB;

namespace PlayersAndDices.Core
{
    public static class Context
    {
        public static LiteDatabase Repository { get; private set; }

        private static bool _booted;

        public static void Boot(LiteDatabase repository)
        {
            if (_booted)
                return;

            Repository = repository;
            _booted = true;
        }
    }
}
